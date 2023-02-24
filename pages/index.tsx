import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/public/news1.jpg";
import img2 from "@/public/pexels-cottonbro-studio-6262964.jpg";
import img3 from "@/public/pexels-cottonbro-studio-6262969.jpg";
import img4 from "@/public/pexels-cottonbro-studio-6531728.jpg";
import img5 from "@/public/pexels-daria-obymaha-1684916.jpg";
import img6 from "@/public/pexels-đàng-thiện-thanh-tài-6347393.jpg";
import img7 from "@/public/pexels-hasan-albari-1652340.jpg";
import img8 from "@/public/pexels-lina-kivaka-1524146.jpg";
import img9 from "@/public/pexels-nappy-936137.jpg";
import { useEffect, useState } from "react";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const inter = Inter({ subsets: ["latin"] });

interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function Home({
  articles,
  photos,
}: {
  articles: any;
  photos: IPhotos[];
}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    
    setTimeout(()=>setLoading(false), 1000)
  
  }, [])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles["main-header"]}>
        <h1>Yino&apos;s Blog</h1>
      </header>
      <main className={styles.main}>
          {loading && (<div className="card-container">
            <div className={`card ${loading ? "loader" : ""}`}>

            </div>
            <div className={`card ${loading ? "loader" : ""}`}>
              
            </div>
            <div className={`card ${loading ? "loader" : ""}`}>
              
            </div>
          </div>)}
        {!loading && <div className="card-container">
          {images.map((img, index) => (<div className={`card`} key={index}>
              <Image src={img} alt="news1" className="card-img" />
            </div>)

            
          )}
        </div>}
      </main>
    </>
  );
}

// this is fetched at build time
export const getStaticProps = async () => {
  const promise1 = fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const promise2 = fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=6"
  );
  const [res1, res2] = await Promise.all([promise1, promise2]);
  const [articles, photos] = await Promise.all([res1.json(), res2.json()]);

  return {
    props: {
      articles,
      photos,
    },
  };
};
