import QRCode from "qrcode";

export const generateQrCode = async (req, res) => {
  try {
    const { shortId } = req.params;
    const shortUrl = `${req.protocol}://${req.get("host")}/${shortId}`;

     const qrImageBuffer = await QRCode.toBuffer(shortUrl, {
      type: "png",
      width: 300,
      margin: 2,
    });

    res.setHeader("Content-Disposition", `attachment; filename="${shortId}.png"`);
    res.setHeader("Content-Type", "image/png");
    res.send(qrImageBuffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
