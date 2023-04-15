import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

function ReadPapers() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Let's Go Biotech - Read Papers</title>
      <meta name="description" content="Property of Let's Go Biotech, maybe" />
    </Head>
    <div>
    <a className={styles.missionLaunch} href="/paper-curation"><b>BACK</b></a>   

    <h2 className={styles.title}>
    🧬 Let's Go Biotech 🚀
    </h2> 
        <main className={styles.mainPaperCuration}>
            <div className={styles.divPaperCuration}>
                <p>This paper is about CRISPR at a high level and how it's gonna be a kickass tool to solve hella problems related to human disease, agriculture and climate change.</p>
            </div>

            <div>
              <p><b>Abstract: The CRISPR tool kit for genome editing and beyond</b></p>
              <div className={styles.paperAbstract}>
             <p>CRISPR is becoming an indispensable tool in biological research. Once known as the bacterial
                immune system against invading viruses, the programmable capacity of the Cas9 enzyme is
                now revolutionizing diverse fields of medical research, biotechnology, and agriculture.
                CRISPR-Cas9 is no longer just a gene-editing tool; the application areas of catalytically
                impaired inactive Cas9, including gene regulation, epigenetic editing, chromatin engineering,
                and imaging, now exceed the gene-editing functionality of WT Cas9. Here, we will present a
                brief history of gene-editing tools and describe the wide range of CRISPR-based genome targeting tools. We will conclude with future directions and the broader impact of CRISPR
                technologies.
              </p> 
            <br />
              </div>
              <a className={styles.missionLaunch}    
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.nature.com/articles/s41467-018-04252-2">
                <br />  
                  <b> &rarr; Read the whole paper here (tho you don't need to for the quiz)</b>
              </a>  


              <br />
              <br />  

              <a className={styles.greenSquare} href="/take-quiz"><b>Take Quiz</b></a>   
 
            </div>
        </main>
        <div className={styles.mainPaperCuration}>
          All rights reserved. Copyright blah blah blah, the year is 2023 right? <br />
          This isn't Let's Go Biotech IP. We didn't write the paper. <br />
          <a href="https://www.feinberg.northwestern.edu/sites/obgyn/faculty/profile.html?xid=46729" target="_blank"><b>This guy did.</b></a></div>
        </div>
  </div>
  )
}

export default ReadPapers;
