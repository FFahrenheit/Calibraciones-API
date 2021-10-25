exports.loginWithWindows = async(req, res) => {
    try {
        console.log({
            user: req.connection.user,
            id: req.connection.userSid,
            groups: req.connection.userGroups
        });
        return res.json({
            ok: true,
            user: req.connection.user,
            id: req.connection.userSid,
            groups: req.connection.userGroups
        });
    } catch (e) {
        return res.status(500).send({
            ok: false,
            error: e
        });
    }
}