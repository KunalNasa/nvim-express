

export function sayHello(req, res) {
    try {
        return res.status(200).json({
            message: 'Hello from the neovim',
            data : {
                name: 'kunal',
                say: 'hello'
            }
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
}


