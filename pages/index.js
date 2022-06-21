import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import VueRouter from 'vue-router'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
            className={styles.image}
          />
        </div>
        <div className={styles.header_links}>
          <Link href="/quiz">
            <a className={styles.header_link}>
              <i className="fi fi-rr-book"></i> Quiz
            </a>
          </Link>

          <Link href="/tag">
            <a className={styles.header_link}>
              <i className="fa-light fa-video"></i> Videos
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.header_link}>
              <i className="fi fi-sr-user"></i> About Us
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.header_link}>
              <i className="fi fi-sr-envelope"></i> Contact
            </a>
          </Link>

          <Link href="/login">
            <a className={styles.header_link}>
              <i className="fi fi-sr-key"></i> Login
            </a>
          </Link>
        </div>
      </div>
      {/*  */}
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <div className={styles.bannerVideo}>
            <iframe
              src="https://www.youtube.com/embed/_yV5aDA4SDQ"
              title="Build an AI that builds Coding Projects using NextJs and Firebase"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.banner_content_text}>
            <h1>
              Turning your <span>ideas</span> into <span>code</span>
            </h1>

            <h4>
              Creative tutorials is a learning platform for developers.
              <br />
              We teach you how to code, how to design, how to create your own
              projects and how to make your own websites.
            </h4>

            <div className={styles.banner_content_buttons}>
              <Link href="/quiz">
                <a className={styles.banner_content_button}>
                  <i className="fa-light fa-play"></i> Start Quiz
                </a>
              </Link>

              <Link href="/tag">
                <a className={styles.banner_content_button}>
                  <i className="fa-light fa-video"></i> Browse Videos
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={styles.featureVideos}>
        <div className={styles.featureVideos_content_title}>
          <h1>
            <i className="fa-light fa-telescope"></i> Featured Projects
          </h1>
        </div>
        <div className={styles.featureVideos_content}>
          <div className={styles.featureVideos_content_videos}>
            <div className={styles.featureVideos_content_thumbnail}>
              <Image
                width={600}
                height={400}
                // objectFit="cover"
                src="/thumbnails/maxresdefault (3).jpg"
                style={{ borderRadius: "10px" }}
                className={styles.image}
                alt="Build your own custom API"
                placeholder="blur"
                blurDataURL="/thumbnails/maxresdefault (3).jpg"
              />
            </div>
            <div className={styles.featureVideos_content_text}>
              <h1>Build your own custom API</h1>
              <p>
                In this project, you will build a custom API using online API
                creator tools.
              </p>
            </div>
            <div className={styles.featureVideos_content_buttons}>
              <Link href="/tags/build_api">
                <a> Read More</a>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className={styles.featureVideos_content_videos}>
            <div className={styles.featureVideos_content_thumbnail}>
              <Image
                width={600}
                height={400}
                // objectFit="cover"
                src="/thumbnails/maxresdefault (4).jpg"
                style={{ borderRadius: "10px" }}
                className={styles.image}
                alt="Build a product card using ReactJs"
                placeholder="blur"
                blurDataURL="/thumbnails/maxresdefault (2).jpg"
              />
            </div>
            <div className={styles.featureVideos_content_text}>
              <h1>Product card using ReactJs </h1>
              <p>
                Here I have created a product card using ReactJs. I have used
                ReactJs and MockAPI to fetch data from the API.
              </p>
            </div>
            <div className={styles.featureVideos_content_buttons}>
              <Link href="/tag">
                <a> Read More</a>
              </Link>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
