import React from "react";

function Footer()
{
    return(
        <section className="section" style={{fontSize:"18px"}}>
            <div className="footer">
                <p>Sorularınız mı var? <span className="tel">0850-390-7444</span> numaralı telefonu arayın</p>
                <div className="blok">
                    <div className="blok_col">
                        <p className="p">SSS</p>
                        <p className="p">Yatırımcı İlişkileri</p>
                        <p className="p">Kullanım Koşulları</p>
                        <p className="p">Bize Ulaşın</p>
                    </div>
                    <div className="blok_col">
                        <p className="p">Yardım Merkezi</p>
                        <p className="p">İş İmkanları</p>
                        <p className="p">Gizlilik</p>
                        <p className="p">Hız Testi</p>
                    </div>
                    <div className="blok_col">
                        <p className="p">Hesap</p>
                        <p className="p">Hediye Kartı Kullan</p>
                        <p className="p">Çerez Tercihleri</p>
                        <p className="p">Yasal Hükümler</p>
                    </div>
                    <div className="blok_col">
                        <p className="p">Medya Merkezi</p>
                        <p className="p">İzleme Yolları</p>
                        <p className="p">Kurumsal Bilgiler</p>
                        <p className="p">Netflix Orijinal İçerikleri</p>
                    </div>
                </div>
                <p>NETFLIX TURKIYE</p>
            </div>
        </section>

    )
}
export default Footer;