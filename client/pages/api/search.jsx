const posts = [
    { id: 1234, title: "Erwann", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices quis orci a blandit. Duis vel neque quis ligula elementum fermentum a nec arcu. Aenean ac felis vel libero convallis fermentum id vel arcu. Aliquam erat volutpat. Etiam turpis erat, tempor nec velit vel, ultrices gravida nisi. Praesent vel varius lacus, quis congue sapien. Donec molestie nisl sed nisi varius, at commodo eros cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis justo orci, aliquet ut vulputate ultricies, fermentum ut justo. Phasellus lectus arcu, bibendum quis laoreet varius, commodo a odio. Cras ultrices ut urna sit amet laoreet. Nullam id ex ut felis porttitor aliquam quis non eros. Vivamus in vestibulum ante. Duis sagittis erat eu felis cursus commodo. Duis pharetra mi ac laoreet vulputate."},
    { id: 1235, title: "Bartho", desc: "hello"},
    { id: 1236, title: "Ethan", desc: "hello" },
    { id: 69420, title: "Shrek", desc: "shrek", img: "https://img.20mn.fr/R598JPw0QvmjyDyhlTZekSk/768x492_shrek-fetera-20-ans-dimanche-lyon-lors-festival-lumiere.jpg"}
]

export default (req, res) => {
    const results = req.query.q ?
        posts.filter(post => post.title.toLowerCase().includes(req.query.q)) : []
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({results: results}))
}