import React from 'react';

const test = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-background-light mb-2 sticky-top bg-white">
                <div className="container mx-auto">
                    <a href="../mainpage.html"><img src="../assets/logo.png" className="me-2" width="50" height="40" /></a>
                    <form className="flex" role="search">
                        <input className="form-input me-2 w-64 px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="search" placeholder="Search" aria-label="Search" id="search-bar" />
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="post-login-buttons"></ul>
                        {/* Contenido dinámico comienza */}
                        {/* Si el token de localStorage no está disponible se muestra esto */}
                        <a className="btn btn-light mx-1" id="log-in-btn" href="../view/LoginForm.html">Log in</a>
                        <a className="btn btn-light mx-1" id="log-out-btn" href="">Log out</a>
                        <a className="btn btn-outline-primary mx-1" id="create-account-btn">Create account</a>

                        {/* Si el token de localStorage está disponible se muestra esto */}
                        <a className="btn btn-outline-primary mx-1" href="../post.html" id="create-post-btn">Create post</a>
                        <a className="nav-link active mx-1" id="alert-bell">&#128276;</a>
                        <img src="../assets/generic-avatar.png" alt="" className="rounded-full mx-1 w-10 h-10" id="user-avatar" />
                    </div>
                </div>
            </nav>
            <main>
                <div className="container mx-auto gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1 md:block hidden">
                            {/* Esta tarjeta también se debe generar de forma dinámica, solo debe aparecer con la verificación del token de localStorage */}
                            <div className="grid grid-cols-1 gap-2 p-0 mt-3">
                                <a className="btn btn-light text-start" href="#">❤️ 138</a>
                                <a className="btn btn-light text-start" href="#">💬 5</a>
                                <a className="btn btn-light text-start" href="#" id="tag-quantity"></a>
                                <a className="btn btn-light text-start" href="#">...</a>
                            </div>
                        </div>

                        {/* Contenido principal */}
                        <div className="md:col-span-2">
                            <div className="card mb-3">
                                <a href=""><img className="card-img-top object-cover" id="post-picture" src="" alt="Post" /></a>
                                <div className="card-body">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <img src="../assets/generic-avatar.png" alt="Author" className="rounded-full w-10 h-10" />
                                        <div>
                                            <h6><a href="" id="post-author"></a></h6>
                                            <p><a href="" id="post-date"></a></p>
                                        </div>
                                    </div>
                                    <div className="post-title mb-3"><a href="" id="post-title"></a></div>
                                    <div>
                                        <p id="post-content"></p>
                                    </div>
                                    <div className="flex items-center space-x-3 mt-3" id="tag-wrapper">
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div><a href="">💓 10 reactions</a></div>
                                        <div><a href="">5 comments</a></div>
                                        <div><a href="">4 minute read</a></div>
                                        <div><a><img src="../assets/bookmark.svg" alt="Bookmark" /></a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-body">
                                    <h4 className="top comments">Top comments (1)</h4>
                                    <div className="flex items-center space-x-2 mb-3">
                                        <img src="../assets/generic-avatar.png" alt="Commenter" className="rounded-full w-10 h-10" />
                                        <div>
                                            <h6><a className="text-start" href="#">El comentador</a></h6>
                                            <p>2024-05-06</p>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur hic possimus optio deserunt est dolorum eius, ab ipsum voluptatem porro magni quod? Fugiat aliquam est quia dolores officia blanditiis praesentium!
                                    </p>

                                    <div className="flex items-center space-x-3 mt-3">
                                        <a className="btn btn-light">❤️ 4 likes</a>
                                        <a className="btn btn-light">💬 reply</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-body">
                                    <h4 className="top comments">Other comments (4)</h4>
                                    {/* Otros comentarios dinámicos */}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar derecho */}
                        <div className="md:col-span-1 hidden md:block">
                            <div className="author-card">
                                <div className="author-container flex items-center">
                                    <img src="../assets/generic-avatar.png" alt="Author Avatar" className="rounded-full w-10 h-10" />
                                    <div>
                                        <h6><a href="#" id="post-author2"></a></h6>
                                    </div>
                                </div>
                                <div className="grid gap-2 mt-2">
                                    <button className="btn btn-primary">Follow</button>
                                </div>
                                <div className="author-card-body mt-2">
                                    <h6>LOCATION</h6>
                                    <span>México</span>
                                    <h6>EDUCATION</h6>
                                    <span>Ing. Mecatrónica</span>
                                    <h6>WORK</h6>
                                    <span>Front-end Developer</span>
                                    <h6>JOINED</h6>
                                    <span>Sep 3, 2019</span>
                                </div>
                                <div className="mt-3" >
                                    {/* Posts by author, dinámico */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default test;
