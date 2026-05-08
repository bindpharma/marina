import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Yat Tentesi — Bimini, Kapela ve Sundeck Tente Uygulamaları',
  description:
    'Yat tentesi ve bimini imalatı: krom-nikel iskelet, Sunbrella ve Stamoid kumaş, Strataglass cam-zip pencere ile kapela ve sundeck tente uygulamaları. İstanbul yat tentesi atölyesi.',
  path: '/hizmetler/yat-tentesi',
  keywords:
    'yat tentesi, bimini, kapela, marin tente, tekne tentesi, sundeck tente, yat güneşliği, sunbrella tente, krom nikel iskelet, strataglass',
});

export default function YatTentesiPage() {
  return (
    <ServicePageTemplate
      slug="yat-tentesi"
      longIntro={
        <>
          <p>
            Yat tentesi, teknenin sadece güneşliği değil; aynı zamanda denizde geçirilen saatlerin
            estetik çerçevesidir. Aslan Marin atölyesinde bimini top, kapela, sundeck tentesi ve
            özel güneşlik uygulamalarını krom-nikel iskelet, marin sınıfı kumaş ve elle çekilmiş
            kalıp ölçüleriyle üretiyoruz.
          </p>
          <p>
            Tente sadece bir kumaş örtü değil — rüzgâr, yağmur ve UV ile ömür boyu pazarlık eden
            bir mühendislik parçasıdır. Bu yüzden iskelet açıları, gergi noktaları, drenaj
            eğimleri ve cam-zip uygulamaları ölçüsünden kesimine bizim disiplinimizdir.
          </p>
          <p>
            Bimini, kapela ve sundeck tenteleri yan yana farklı işlerdir. Hangisinin teknenize
            uygun olduğuna birlikte karar veriyoruz; gerekirse modüler — yani sökülüp takılabilen
            — versiyonlarını öneriyoruz.
          </p>
        </>
      }
      sections={[
        {
          heading: 'Bimini ve kapela arasındaki fark nedir?',
          body: (
            <>
              <p>
                Bimini, kullanım anında açılan, ihtiyaç olmadığında katlanan hafif bir
                güneşliktir. Boru iskeletli ve genellikle açık yanlıdır; günlük kullanımda hızlı
                bir gölge ihtiyacını karşılar.
              </p>
              <p>
                Kapela ise teknenin kokpitini ya da tüm dümen alanını yağmur, rüzgâr ve dalgaya
                karşı koruyan kapalı bir tentedir. Cam-zip pencereler, yan ve ön kapatma panelleri
                içerebilir. Daha yapılı bir iskelet ve sıkı kalıp gerektirir.
              </p>
              <p>
                Çoğu yat sahibi her ikisini de farklı sezonlar için tercih eder. Atölyemizde her
                iki ürünü tek bir kumaş ailesinden üretebiliyor — böylece teknenizin estetiği
                bütünleşik kalıyor.
              </p>
            </>
          ),
        },
        {
          heading: 'Hangi kumaşı seçiyoruz?',
          body: (
            <p>
              Tente uygulamalarında neredeyse istisnasız Sunbrella ya da Stamoid Top
              kullanıyoruz. Sunbrella akrilik bir kumaş — UV koruması yüksek, küflenmez, hızlı
              kurur ve renk haslığı 5-7 yıl bozulmaz. Stamoid Top ise PVC bazlı, su geçirmez ve
              daha ağır kullanım için uygundur. Yat tarzına ve renk uyumuna göre keşifte birlikte
              karar veriyoruz.
            </p>
          ),
        },
        {
          heading: 'Cam-zip pencere uygulamaları',
          body: (
            <p>
              Kapela ve full enclosure uygulamalarında, görüş açısını ve havalandırmayı korumak
              için yumuşak cam-zip pencereler kullanıyoruz. Strataglass ya da Crystal Clear
              kalitesinde, kalın ve şeffaflığı uzun ömürlü olan camları tercih ediyoruz.
              Fermuarlar YKK marin sınıfıdır — tuza ve korozyona dayanır.
            </p>
          ),
        },
        {
          heading: 'İskelet imalatı: krom-nikel ya da paslanmaz çelik',
          body: (
            <p>
              İskelet seçimi tente ömrünü doğrudan etkiler. Galvaniz boru ekonomik bir tercih
              olabilir ama biz özellikle uzun süreli denizde kalan tekneler için 316 paslanmaz
              çelik veya krom-nikel iskeleti öneriyoruz. Boru çapı ve kavis açıları teknenizin
              boyutuna göre hesaplanır — rüzgâr yüküne dayanım için.
            </p>
          ),
        },
      ]}
      whyUs={[
        'Sunbrella, Stamoid ve Serge Ferrari yetkili kanaldan tedarik — sahte yok.',
        'YKK marin fermuar ve Strataglass cam-zip pencere uygulamaları.',
        '316 paslanmaz çelik iskelet seçeneği ile uzun ömür.',
        'Modüler / sökülebilir tente sistemleri sezon dışı için.',
        'Yerinde ölçü ve montaj — atölyede dikim, marinada teslim.',
        'Tente için ayrı işçilik garantisi: dikiş açılması ya da fermuar arızasında ücretsiz revizyon.',
      ]}
    />
  );
}
