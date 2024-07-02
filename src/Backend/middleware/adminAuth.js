const adminAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader === 'Basic ' + Buffer.from('admin:password').toString('base64')) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = adminAuth;
