const posts = [
    { id: 1234, title: "Erwann", desc: "hello" },
    { id: 1235, title: "Bartho", desc: "hello" },
    { id: 1236, title: "Ethan", desc: "hello" },
]

export default (req, res) => {
    const results = req.query.q ?
        posts.filter(post => post.title.toLowerCase().includes(req.query.q)) : []
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({results: results}))
}