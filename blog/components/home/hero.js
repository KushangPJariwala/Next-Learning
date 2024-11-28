import React from "react";
import classes from'./hero.module.css'
import Image from 'next/image'
import heroImg from '../../public/images/hero.jpg'

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={heroImg} alt="imagr" width={300} height={300}/>
      </div>
      <h1>Hi, I'm Kushang</h1>
      <p>
        SP I blog about web development especially frontend frameworks like
        Angular or React.
      </p>{" "}
    </section>
  );
}
