import Link from "next/link";
import Image from "next/image";
import tags from "../../styles/tags.module.css";
export default function Tags() {
  return (
    <div className={tags.wrapper}>
      <div className={tags.header}>
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Ideas Into Code"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
            placeholder={"blur"}
            blurDataURL={`/logo.png`}
            data-src="logo"
            className={tags.image}
          />
        </div>
        <div className={tags.header_links}>
          <Link href="/quiz">
            <a className={tags.header_link}>
              <i className="fi fi-rr-book"></i> Quiz
            </a>
          </Link>

          <Link href="/tag">
            <a className={tags.header_link}>
              <i className="fa-light fa-video"></i> Videos
            </a>
          </Link>

          <Link href="/about">
            <a className={tags.header_link}>
              <i className="fi fi-sr-user"></i> About Us
            </a>
          </Link>

          <Link href="/contact">
            <a className={tags.header_link}>
              <i className="fi fi-sr-envelope"></i> Contact
            </a>
          </Link>

          <Link href="/login">
            <a className={tags.header_link}>
              <i className="fi fi-sr-key"></i> Login
            </a>
          </Link>
        </div>
      </div>
      {/*  */}
      <div className={tags.tagBox}>
        <div className={tags.tagBox_content_title}>
          <h1>Build your own custom API</h1>
        </div>
        <div className={tags.tagBox_content}>
          <div className={tags.tagBox_content_video}>
            <iframe
              src="https://www.youtube.com/embed/GNCevIHA1E0"
              title="How to Build your own custom API for beginners"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={tags.tagBox_content_text}>
            Hello There! In this blog, I will be sharing how to build your own
            custom API for beginners. In this video I coverd <strong>3</strong>{" "}
            concepts on how to build your own custom API.
            <br /> <br />
            <h1>First What is an API?</h1>
            <br /> <br />
            An API is a set of rules that describes how to interact with a web
            service. This is a tool we use to communicate with our backend. In
            an API, before we get access to our backend, we need to create an
            API KEY This KEY is used to authenticate our request. Once we got
            our KEY we then need to write some set of codes to fully communicate
            with our backend. When access an API we have methods we use to
            interact with the API service. Some of those methods are GET, POST,
            PUT, DELETE, PATCH, HEAD, OPTIONS. But in this video we will cover
            only <b>GET</b> method.
            <br />
            <br />
            <h1>Topics covered in this video:</h1>
            <br /> <br />
            <ul>
              <li>
                00:01 &gt; fetching our Data from our <b>API</b>
              </li>
              <li>
                03:50 &gt; using <b>Insomnia</b> to test our API
              </li>
              <li>
                10:17 &gt; Testing our code in our <b>ReactApp</b>
              </li>
            </ul>
            <div className={tags.timestamps}>
              <span>00:01</span>
              <div className={tags.timestamps_content}>
                In the video I covered how to fetch our data from our API. First
                we used all our public APIs tool to create our API and
                endpoints.
                <br /> After that we used React to fetch the data from our API,
                and that is done using <b>&lt;Fetch&gt;</b> component.
                <h1>📑Source Code</h1>
                {/*  */}
                <div className={tags.codes}>
                  <div className={tags.code}>
                    <pre>
                      <code className="language-javascript">
                        {`javascript📦
                            import { useEffect, useRef } from 'react';
                            import logo from './logo.svg';
                            import './App.css';
                            function App() {
                                const getValue = useRef()
                                useEffect(() => {
                                  // first
                                
                                  return () => {
                                    testAPI();
                                  }
                                }, [])
                              
                                const testAPI = async () => {
                                  const repeatGetValue = getValue.current;
                                   const response = await fetch('https://6298edf8bf77b60258240030.mockapi.io/api/v1/users');
                                    const json = await response.json();
                                    console.log(json);
                              
                                    repeatGetValue.innerHTML = "$"{json[0].test};
                              
                                    const response2 = await fetch('https://9638f2fb-b466-4c71-bfae-6b3a42599488.mock.pstmn.io/get');
                                    const json2 = await response2.json();
                                    console.log(json2);
                                };
                                return (
                                    <div className="App">
                                      <header className="App-header">
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <p>
                                          Edit <code>src/App.js</code> and save to reload.
                                        </p>
                                        <div className="apiresponse" ref={getValue}>Test</div>
                                        <a
                                          className="App-link"
                                          href="https://reactjs.org"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          Learn React
                                        </a>
                                      </header>
                                    </div>
                                  );
                                }
                                
                                export default App;
                            `}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
