// Aslan Marin - Business Constants
// Tüm sayfalarda kullanılan firma bilgileri ve içerik veri kaynağı

export const SITE = {
  name: 'Aslan Marin',
  legalName: 'Aslan Marin Yat Döşeme ve Dekorasyon',
  url: 'https://aslanmarin.com',
  defaultTitle: 'Aslan Marin | İstanbul Yat Döşeme ve Dekorasyon',
  defaultDescription:
    'İstanbul\'un tüm marinalarında yat döşeme, dekorasyon, tente, halı ve minder uygulamalarında uzman atölye. Tuzla, Pendik, Ataköy, Fenerbahçe ve Kalamış marinalarında ölçüden teslime profesyonel marin hizmeti.',
  locale: 'tr_TR',
  twitter: '@aslanmarintr',
  founded: '2007',
} as const;

export const CONTACT = {
  phone: '+90 531 900 60 53',
  phoneRaw: '+905319006053',
  email: 'info@aslanmarin.com',
  whatsapp: '905319006053',
  address: {
    street: 'Sütlüce, Şekerkuyu Sk. No:45',
    district: 'Beyoğlu',
    city: 'İstanbul',
    postalCode: '34445',
    country: 'TR',
    full: 'Sütlüce Mah. Şekerkuyu Sk. No:45, 34445 Beyoğlu/İstanbul',
  },
  geo: {
    lat: 41.0498,
    lng: 28.9591,
  },
  hours: 'Pzt–Cmt 09:00–19:00',
  social: {
    instagram: 'https://www.instagram.com/aslanmarintr/',
    facebook: 'https://www.facebook.com/aslanmarintr/',
  },
} as const;

// Hizmet sayfaları — her biri ayrı landing page olarak farklı keyword grubu hedefler
export const SERVICES = [
  {
    slug: 'yat-doseme',
    number: '01',
    title: 'Yat Döşeme',
    short: 'Yat İç ve Dış Döşeme',
    excerpt:
      'Salon, kabin, yemek alanı ve dış güverte için ölçüden dikime, marin sınıfı malzemeyle özel imalat döşeme.',
    keywords: 'yat döşeme, tekne döşeme, marin döşeme, yat iç döşeme, yat oturma grubu döşeme',
    benefits: [
      'Sunbrella, Silvertex ve Stamoid marin kumaşlar',
      'Su geçirmez, küflenmez, hızlı kuruyan dolgu',
      'Tekne formuna birebir kalıp çıkarma',
      'UV ve tuz korozyonuna karşı dayanım',
    ],
  },
  {
    slug: 'yat-tentesi',
    number: '02',
    title: 'Yat Tentesi',
    short: 'Bimini, Kapela & Tente',
    excerpt:
      'Bimini top, kapela, sundeck tentesi ve özel ölçü güneşlik uygulamaları; estetik ve dayanımı buluşturan tasarım.',
    keywords: 'yat tentesi, bimini, kapela, marin tente, tekne tentesi, sundeck tente',
    benefits: [
      'Krom-nikel iskelet ve marin kalite dikiş',
      'Sunbrella ile UV/güneş ışığına maksimum koruma',
      'Cam-zip pencere uygulamaları',
      'Söküp takılabilir modüler sistem seçenekleri',
    ],
  },
  {
    slug: 'yat-halisi',
    number: '03',
    title: 'Yat Halısı',
    short: 'Marin Halı Uygulamaları',
    excerpt:
      'Leke tutmaz, alev geciktirici, anti-bakteriyel marin halı ve PVC kaplamalar; tekne ölçüsüne özel kesim.',
    keywords: 'yat halısı, marin halı, tekne halısı, pvc tekne kaplama, antibakteriyel marin halı',
    benefits: [
      'Cam elyaflı PVC taban — esnemez, daralmaz',
      'Anti-bakteriyel ve koku tutmaz yapı',
      'Renk ve doku seçenekleri',
      'Profesyonel yapıştırma veya geçmeli sistem',
    ],
  },
  {
    slug: 'yat-minderleri',
    number: '04',
    title: 'Yat Minderleri',
    short: 'Güneşlenme & Oturma Minderleri',
    excerpt:
      'Güverte, fly bridge ve oturma grubu için suya ve UV\'ye dayanıklı, hızlı kuruyan dolgulu minder imalatı.',
    keywords: 'yat minderi, fly bridge minder, güverte minderi, marin minder, sunbrella minder',
    benefits: [
      'Açık hücre fast-dry sünger seçeneği',
      'Su geçirmez fermuar ve drenajlı dikim',
      'Renk uyumlu özel rest ve şilte takımları',
      'Kolay temizlenir, leke tutmaz kumaş',
    ],
  },
  {
    slug: 'yat-dekorasyonu',
    number: '05',
    title: 'Yat Dekorasyonu',
    short: 'Tavan, Duvar & Komple Dekorasyon',
    excerpt:
      'Tavan kaplamadan duvar paneline, perdeden yatak takımına: yatınızın iç mekânına bütünleşik dekorasyon.',
    keywords: 'yat dekorasyonu, tekne dekorasyonu, yat tavan kaplama, yat duvar kaplama, yat perde',
    benefits: [
      'Akustik konfor sağlayan yumuşak tavan kaplama',
      'Yatak ve nevresim takımları (özel ölçü)',
      'Karartma perde ve store sistemleri',
      'Renk-doku-malzeme uyum danışmanlığı',
    ],
  },
] as const;

export const MARINAS = [
  'Viaport Tuzla Marina',
  'Pendik Marina',
  'Ataköy Marina',
  'Güzelce Marina',
  'West İstanbul Marina',
  'Fenerbahçe Marina',
  'Setur Kalamış Marina',
  'İstanbul City Port',
  'İstinye Marina',
  'Tarabya Tekne Park',
  'Hangarlar & Tersaneler',
  'Açık Deniz Mobil Servis',
] as const;

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Keşif',
    text: 'Marinanıza geliyor, teknenizi yerinde ölçüyor ve ihtiyaçlarınızı sizinle netleştiriyoruz.',
  },
  {
    num: '02',
    title: 'Tasarım',
    text: 'Kumaş, renk ve modeli birlikte seçiyor; görsel önizleme ve net fiyat sunuyoruz.',
  },
  {
    num: '03',
    title: 'Üretim',
    text: 'Atölyemizde, tek tek kalıp çıkararak, marin sınıfı dikişle üretiyoruz.',
  },
  {
    num: '04',
    title: 'Montaj',
    text: 'Söz verdiğimiz tarihte teknenize geliyor, montajı bizzat tamamlıyor ve garanti veriyoruz.',
  },
] as const;

export const FAQS = [
  {
    q: 'Yat döşeme uygulamaları ne kadar sürede tamamlanır?',
    a: 'Standart bir oturma grubu döşemesi, ölçü alındıktan sonra 7–14 iş günü içinde tamamlanır. Komple iç döşeme veya kapsamlı tente projeleri 3–4 haftaya kadar uzayabilir. Sezon yoğunluğunda zaman planlamasını sizinle baştan paylaşırız; söz verilen tarihte teslim, çalışma prensibimizdir.',
  },
  {
    q: 'Hangi marinalara hizmet veriyorsunuz?',
    a: 'Tuzla\'dan Tarabya\'ya, İstanbul\'un Avrupa ve Anadolu yakasındaki tüm marinalara mobil hizmet veriyoruz. Viaport Tuzla, Pendik, Ataköy, Güzelce, West İstanbul, Fenerbahçe, Setur Kalamış, İstanbul City Port, İstinye Marina ve Tarabya Tekne Park dahil tüm marinaların yanı sıra hangar, tersane ve özel iskelelerde de keşif yapıyoruz.',
  },
  {
    q: 'Keşif ve teklif ücretli mi?',
    a: 'Hayır. İstanbul içinde yerinde keşif ve teklif tamamen ücretsizdir. Ekibimiz teknenize gelir, ihtiyaçları analiz eder, ölçüleri alır ve aynı ya da ertesi gün net bir fiyat teklifi paylaşır.',
  },
  {
    q: 'Hangi kumaş ve malzemeleri kullanıyorsunuz?',
    a: 'Tüm dış mekân uygulamalarında Sunbrella, Stamoid Top, Silvertex ve Serge Ferrari gibi marin sınıfı kumaşları kullanıyoruz. İç mekân için Alcantara, mikrofiber suni deri ve premium döşemelik kumaş seçenekleri sunuyoruz. Dolgularda açık hücreli fast-dry sünger tercih ediyoruz.',
  },
  {
    q: 'İşçilik garantisi veriyor musunuz?',
    a: 'Evet. Her uygulamamız için yazılı işçilik garantisi sunuyoruz. Dikiş açılması, malzeme kusuru veya montaj kaynaklı sorunlarda hızlı revizyon hizmetimiz devreye girer.',
  },
  {
    q: 'Sadece İstanbul\'da mı çalışıyorsunuz?',
    a: 'Merkezimiz Sütlüce\'dedir ve birincil hizmet bölgemiz İstanbul marinaları ile Marmara kıyılarıdır. Talebe göre Türkiye\'nin diğer kıyı bölgelerinde de proje üretiyoruz; Bodrum, Marmaris ve Göcek gibi destinasyonlardaki büyük yatlar için özel proje görüşmeleri yapıyoruz.',
  },
  {
    q: 'Eski döşememi yenilemek mi yoksa komple sökmek mi gerekir?',
    a: 'Tekneye ve mevcut döşemenin durumuna göre karar veriyoruz. Eğer iskelet ve dolgu sağlamsa sadece kumaş yenileme yapıyoruz — bu daha ekonomik bir çözümdür. Sünger çökmüş, ahşap iskelet zayıflamışsa komple yenileme öneriyoruz. Keşif sırasında her iki seçeneğin maliyet ve dayanım farkını şeffaf olarak anlatıyoruz.',
  },
  {
    q: 'Kışlık branda ve örtü hizmetiniz var mı?',
    a: 'Evet. Tekneyi yağmur, kar, güneş ve tuza karşı koruyan ölçü-tasarım kışlık brandalar üretiyoruz. Sezon başında ve sonunda bakım-revizyon hizmeti de sunuyoruz.',
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/projeler', label: 'Projeler' },
  { href: '/marinalar', label: 'Marinalar' },
  { href: '/sss', label: 'S.S.S' },
  { href: '/iletisim', label: 'İletişim' },
] as const;
