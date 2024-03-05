import React from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "1Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            title: "2Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 3,
            title: "3Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 4,
            title: "4Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];

    return (
        <div className="home">

            <div class="h1 text-center text-dark py-1" id="pageHeaderTitle">BLOG TYPE</div>
            <div className="card-type">
                <div className="container bootstrap snippets bootdeys">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">ART</h6>
                                        <h4 className="title"><a href="/?cat=art">ART</a></h4>


                                        <p className="description">Explore diverse art forms, artists, and trends in the vibrant world of visual expression.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="blue2" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">SCIENCE</h6>
                                        <h4 className="title"><a href="/?cat=science">SCIENCE</a></h4>
                                        <p className="description">Discover the latest breakthroughs, research, and innovations across various scientific disciplines.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">TECHNOLOGY</h6>
                                        <h4 className="title"><a href="/?cat=technology">TECHNOLOGY</a></h4>
                                        <p className="description">Stay updated on gadgets, software, and emerging tech trends shaping the digital landscape.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="blue2" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">CINEMA</h6>
                                        <h4 className="title"><a href="/?cat=cinema">CINEMA</a></h4>
                                        <p className="description">Immerse yourself in movie reviews, behind-the-scenes insights, and discussions about filmmaking.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">DESIGN</h6>
                                        <h4 className="title"><a href="/?cat=design">DESIGN</a></h4>
                                        <p className="description">Celebrate creativity in graphic, web, and interior design, exploring trends and influential designers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="blue2" data-radius="none">
                                    <div className="content">
                                        <h6 className="category">FOOD</h6>
                                        <h4 className="title"><a href="/?cat=food">FOOD</a></h4>
                                        <p className="description">Indulge in culinary delights with mouth-watering recipes, food culture explorations, and cooking insights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-2"></div>
            <div class="h1 text-center text-light py-3" id="pageHeaderTitle" style={{ backgroundColor: "#112D4E" }}>BLOG</div>
            <div className="container p-5" style={{ backgroundColor: "#112D4E" }}>
                <div className="post-des px-">
                    <div className="posts">
                        {posts.map((post) => (
                            <div className="post" key={post.id}>
                                <div className="post-des">
                                    <section className="light">
                                        <div className="container py-2">
                                            <article className="postcard light blue">
                                                <a className="postcard__img_link" href="#" >
                                                    <img className="postcard__img" src={post.img} alt="Image Title" />
                                                </a>
                                                <div className="postcard__text t-dark">
                                                    <Link className="link" to={`/post/${post.id}`}>
                                                        <h1 className="postcard__title blue px-1"><a href="#">{post.title}</a></h1>
                                                    </Link>
                                                    <div className="postcard__bar"></div>
                                                    <div className="postcard__preview-txt">{post.desc} .. 
                                                        <a className="postcard__img_link" href="#">
                                                            <Link className="link" style={{color:"#3F72AF"}} to={`/post/${post.id}`}>
                                                                 .  Read More
                                                            </Link>
                                                        </a></div>

                                                </div>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home