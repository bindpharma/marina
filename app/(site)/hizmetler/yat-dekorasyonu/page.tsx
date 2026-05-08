import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Yat Dekorasyonu — Tavan, Duvar Kaplama ve Komple İç Tasarım',
  description:
    'Yat dekorasyonu: tavan ve duvar kaplama, perde, yatak takımı ve komple iç mekân yenileme. Akustik konfor ve estetik bütünlük için profesyonel marin dekorasyon hizmeti.',
  path: '/hizmetler/yat-dekorasyonu',
  keywords:
    'yat dekorasyonu, tekne dekorasyonu, yat tavan kaplama, yat duvar kaplama, yat perde, yat yatak takımı, yat iç tasarım, anahtar teslim yat dekorasyon',
});

export default function YatDekorasyonuPage() {
  return (
    <ServicePageTemplate
      slug="yat-dekorasyonu"
      longIntro={
        <>
          <p>
            Yat dekorasyonu, sadece estetik bir mesele değil — aynı zamanda yaşam konforunun
            mühendisliğidir. Aslan Marin atölyesinde yat dekorasyon projelerimiz; tavan ve duvar
            kaplamasından perde sistemlerine, yatak takımlarından dekoratif aksesuarlara kadar
            yatınızın iç mekânını bütünleşik ele alır.
          </p>
          <p>
            Tavan kaplama, çoğu yat sahibinin görmezden geldiği ama yaşam kalitesini en çok
            etkileyen alandır. Yumuşak tavan kaplaması; akustik yansımayı yumuşatır, motor
            seslerini dindirir, iç mekânı daha sıcak hisli hâle getirir. Aynı şey duvar panelleri
            için de geçerlidir.
          </p>
          <p>
            Renk-doku-malzeme uyumu sürecini sahibinin tarzına göre tasarlıyoruz. Klasik bir
            Azimut ile çağdaş bir Princess&apos;ın iç dünyaları çok farklıdır; biz teknenizin
            karakterine uygun bir dekorasyon önerisi getiriyoruz.
          </p>
        </>
      }
      sections={[
        {
          heading: 'Tavan ve duvar kaplaması',
          body: (
            <p>
              Tavan kaplaması; nemden etkilenmeyen, alev geciktirici, yumuşak dokulu özel
              malzemelerle uygulanır. Akustik yutum sağlayan dolgulu tavan paneli; motor sesini ve
              dış gürültüyü hissedilir biçimde azaltır. Duvarlarda ise mikrofiber suni deri,
              Alcantara ya da kumaş kaplama tercih edilir. Eski paneller sökülür, yenisi tekneye
              özel kalıp ile dikilip monte edilir.
            </p>
          ),
        },
        {
          heading: 'Perde ve karartma sistemleri',
          body: (
            <p>
              Salon ve kabin pencereleri için karartma perdesi, store ya da rulo perde sistemleri
              kuruyoruz. Yatakta uyumayı kolaylaştıran tam karartma kumaşlar, salon için ışığı
              yumuşatan yarı şeffaf kumaşlar tercih edilir. Tüm raylar ve mekanizmalar tuza
              dirençli marin sınıfıdır.
            </p>
          ),
        },
        {
          heading: 'Yatak takımları ve nevresimler',
          body: (
            <p>
              Yat yatakları çoğunlukla standart ölçülerin dışındadır — köşeleri yuvarlatılmış, iki
              yandan dar, ergonomik olarak özel kesimlidir. Bu şilteler için özel ölçü çarşaf,
              nevresim ve yorgan takımı dikiyoruz. Pamuk-keten karışımı, nefes alan, denizde rahat
              uyku için optimize edilmiş kumaşlar tercih ediyoruz.
            </p>
          ),
        },
        {
          heading: 'Renk ve doku danışmanlığı',
          body: (
            <p>
              Bir yat dekorasyon projesinin en kritik kararı renk-doku uyumudur. Salon kumaşı,
              tavan kaplaması, perde rengi ve halı dokusu birlikte düşünülmelidir. Keşif sırasında
              tüm numuneleri teknenize getirip ışık altında, mevcut ahşap ve metal aksamla
              birlikte değerlendiriyoruz. Karar netleşince yazılı moodboard sunuyoruz.
            </p>
          ),
        },
      ]}
      whyUs={[
        'Bütünleşik dekorasyon: döşeme, tavan, perde, yatak — tek atölye.',
        'Akustik dolgulu tavan kaplaması ile motor sesi azaltma.',
        'Klasik ya da çağdaş — teknenizin karakterine uygun tasarım.',
        'Tüm metal aksam ve raylar marin sınıfı, tuza dirençli.',
        'Yazılı moodboard ve renk-doku önerisi.',
        'Yatak takımlarında pamuk-keten, nefes alan, denizde uyku konforu.',
      ]}
    />
  );
}
