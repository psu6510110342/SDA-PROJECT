import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className="singlen">
            <div class="row">
                <div class="col-sm-8">
                    <div className="content">
                        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <div className="user">
                            <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            <div className="info">
                                <span>John</span>
                                <p>Posted 2 day ago</p>
                            </div>
                            <div className="edit">
                                <Link to={`/write?edit=2`} >
                                    <img src={Edit} alt="" />
                                </Link>
                                <img src={Delete} alt="" />
                            </div>
                        </div>
                        <h1>1Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div className="menu">
                        <Menu />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Single