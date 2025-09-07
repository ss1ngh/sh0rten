  import QRCode from 'qrcode';
  import URL from '../models/url.js'; // Import URL model to verify shortId exists

  export const generateQrCode = async (req, res) => {
    try {
      const { shortId } = req.params;

      // Verify shortId exists in database
      const urlRecord = await URL.findOne({ shortId });
      if (!urlRecord) {
        return res.status(404).json({ message: 'Short URL not found' });
      }

      const shortUrl = `${process.env.BASE_URL || `${req.protocol}://${req.get('host')}`}/${shortId}`;

      const qrImageBuffer = await QRCode.toBuffer(shortUrl, {
        type: 'png',
        width: 300,
        margin: 2,
      });

      res.setHeader('Content-Disposition', `attachment; filename="${shortId}.png"`);
      res.setHeader('Content-Type', 'image/png');
      res.send(qrImageBuffer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };