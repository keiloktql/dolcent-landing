import axios from "axios";
import { SYSTEM_STATUS_ENUM } from "@/lib/enum";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Gets the system status for Dolcent
 * Note: list of status type from uptime: https://betterstack.com/docs/uptime/api/list-all-existing-monitors/
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "HTTP method not supported" });
  }
  let data = null;
  let message = null;
  try {
    const response = await axios.get(
      "https://uptime.betterstack.com/api/v2/monitors",
      {
        headers: { Authorization: `Bearer ${process.env.UPTIME_API_KEY}` }
      }
    );
    if (response?.data?.data?.length === 0) {
      throw Error("NO_MONITORS");
    }
    const monitors = response.data.data;
    const down = monitors.some((oneMonitor) => {
      const { status } = oneMonitor.attributes;
      return status === "down" || status === "validating";
    });
    const paused = monitors.some((oneMonitor) => {
      const { status } = oneMonitor.attributes;
      return (
        status === "paused" || status === "pending" || status === "maintenance"
      );
    });
    const up = monitors.some((oneMonitor) => {
      const { status } = oneMonitor.attributes;
      return status === "up";
    });
    if (down) {
      data = SYSTEM_STATUS_ENUM.DOWN;
    } else if (paused && !down && !up) {
      data = SYSTEM_STATUS_ENUM.PAUSED;
    } else {
      data = SYSTEM_STATUS_ENUM.UP;
    }
  } catch (error) {
    if (error.message && error.message === "NO_MONITORS") {
      message = "NO_MONITORS";
    } else {
      message = "Something went wrong.";
    }
    return res.status(500).json({ success: false, message, data });
  }
  return res.status(200).json({ success: true, message, data });
}
