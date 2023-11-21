import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>VIROR | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leaf.png" />
      </Head>
      <Navbar/>
      <div className={styles.body}>
        <h1 className={styles.heading}>VIROR: Green Products, Redefined</h1>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, in. Magnam architecto odit consequuntur nemo dolores eum iusto. Odio eius sunt sed doloremque soluta, exercitationem beatae quia. Exercitationem nam consectetur quaerat, soluta eveniet nobis? Iste placeat natus autem officiis reprehenderit enim laboriosam! Eaque culpa suscipit est reprehenderit officiis quasi dolores unde mollitia exercitationem id quos eveniet assumenda natus cum consequatur ab, numquam quia corrupti quisquam veritatis neque, possimus ducimus inventore. Iste alias numquam repellendus saepe nemo dolorem, atque cupiditate? Omnis ut, corporis odio, rem similique alias minus harum temporibus velit quidem ducimus amet quo libero suscipit officia ullam vero nisi? </p>
        <h1 className={styles.about}>About Us</h1>
        <p className={styles.abouttext}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, in. Magnam architecto odit consequuntur nemo dolores eum iusto. Odio eius sunt sed doloremque soluta, exercitationem beatae quia. Exercitationem nam consectetur quaerat, soluta eveniet nobis? Iste placeat natus autem officiis reprehenderit enim laboriosam!</p>
      </div>
      
    </>
  );
}
