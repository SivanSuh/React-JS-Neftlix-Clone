import React from 'react'
import logo from   "./images/logo.png";
import Menu from "./Menu";
import intro from "./images/mobile-0819.jpg";
import tv from "./images/tv.png"
import child from "./images/device-pile.png";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

function Netflix() {
    
    return (
        <>
        <div className="container">
            <div className="wrapper">
                <img className="logo" src={logo} alt="logos" />
                <div>
                    <select className="select">
                        <option className="option">Turkçe</option>
                        <option className="option">English</option>
                    </select>
                    <Link to="/signup" className="btn-sign">Oturum Aç</Link>
                </div>
            </div>
            <main className="main">
                <div>
                    <h1 style={{fontSize:"50px"}}>Sınırsız film, dizi ve çok daha fazlası.</h1>
                </div>
                <div>
                    <p>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</p>
                </div>
                <div>
                    <p>İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</p>
                </div>
                <div className="search">
                    <input className="input" type="text" placeholder="enter click"/>
                    <button className="btn">Başlayın</button>
                </div>
            </main>
        </div>
        <section className="section">
            <Menu title="Televizyonunuzda izleyebilirsiniz." image={tv} description="Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin." />
        </section>
        <section className="section">
            <Menu title="Çevrimdışı izlemek için içerikleri indirin." description="En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun." image={intro}/>
        </section>
        <section className="section">
            <Menu title="İstediğiniz her yerde izleyin." description="Ekstra ücret ödemeden telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin." image={child}/>
        </section>
        <section className="section">
            <div className="accordion-menu-dash">
                <h2>SIKÇA SORULAN SORULAR</h2>
                <Accordion  button="Netflix Nedir ?" description="Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha  fazlasını içeren geniş bir arşiv sunan bir yayın hizmetidir.

                Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!" />

                <Accordion button="Netflix'in Maliyeti Nedir ?" description="Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 26,99 TL ile 54,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok." />

                <Accordion button="Nerede İzleyebilirim" description="İstediğiniz yerde, istediğiniz zaman, sınırsız sayıda cihazda izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın.
                Favori içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde götürün." />

                <Accordion button="Nasıl İptal edebilirim ?" description="Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun." />

                <Accordion button="Netflix'te ne izleyebilirim" description="Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin." />
                <p style={{fontSize:"18px"}}>İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.</p>
                <div className="search">
                    <input className="input" type="text" placeholder="E-posta Adresi"/>
                    <button className="btn">Başlayın</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Netflix
