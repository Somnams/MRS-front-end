import * as React from 'react';
import './index.scss';
import Home from "../Home";
import Nav from "../../components/Navbar";

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ct" id="t1">
                <div className="ct" id="t2">
                    <div className="ct" id="t3">
                        <div className="ct" id="t4">
                            <main>
                                {/*<nav>*/}
                                {/*    <ul>*/}
                                {/*        <li><a className="nav-link" href="#t1"> <span id="a-home">Home</span></a></li>*/}
                                {/*        <li><a className="nav-link about" href="#t2"> <span*/}
                                {/*            id="a-about">About</span></a></li>*/}
                                {/*        <li><a className="nav-link work" href="#t3"> <span id="a-work">Work</span></a>*/}
                                {/*        </li>*/}
                                {/*        <li><a className="nav-link contact" href="#t4"> <span*/}
                                {/*            id="a-contact">Contact</span></a></li>*/}
                                {/*    </ul>*/}
                                {/*</nav>*/}
                                <Nav/>
                                <section className="page" id="home"><i className="fa fa-home"></i>
                                    <p className="first">Home Sweet Home.</p>
                                    <p className="second">Welcome back.</p>
                                </section>
                                <section className="page" id="about"><i className="fa fa-book"></i>
                                    {/*<p>My Life was short but sweet</p>*/}
                                    <Home/>
                                </section>
                                <section className="page" id="work"><i className="fa fa-cogs"></i>
                                    <p>All work. All Play.</p>
                                </section>
                                <section className="page" id="contact"><i className="fa fa-twitter"></i>
                                    <p>@losslessdesign</p>
                                </section>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
