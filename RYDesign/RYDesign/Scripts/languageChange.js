if (window.localStorage.getItem('language') == null) window.localStorage.setItem('language', window.navigator.userLanguage || window.navigator.language);

function changeLanguage(language) {
    window.localStorage.setItem('language', language);
    pageLanguage.currentLanguage(language);  // for facebooklogin.js
    location.reload();
}

if (window.localStorage.getItem('language') == "id") {
    document.getElementsByTagName('html')[0].setAttribute('lang', 'id');  // change page's main language to Indonesian

    // Home page translation to Indonesian
    $('#homeInfo1').text('Selamat Datang di RY Design, perusahaan teknologi tinggi global yang menjamin produksi peralatan audio yang terbaik. Fokus kami adalah mewujudkan keyakinan perusahaan kami, yaitu siapapun berhak untuk menikmati sistem pendengaran yang unggul dengan harga yang terjangkau dalam dunia komunikasi instan, di mana kecepatan dan keandalan diterutamakan di dunia kami yang sibuk dan aktif ini.');
    $('#homeMiniTitle').text('Misi kita');
    $('#homeInfo2').text('RY Design membanggakan diri dalam memastikan bahwa pelanggan menerima pengalaman suara terbaik yang pernah mereka alami melalui penawaran produk inovatif kami, standar kualitas tinggi dan penelitian teknologi yang canggih. Ketika anda mencari bantuan kami, anda diyakinkan untuk menerima nasihat profesional yang disesuaikan dengan kebutuhan dan spesifikasi anda, klien kami. Tujuan kami adalah untuk memberikan yang terbaik, maka dari itu kita memiliki berbagai penawaran mulai dari pengunaan di lingkungan perusahaan sampai katering perhotelan atau untuk kesenangan pribadi.');

    // About page translation to Indonesian
    $('#aboutTitle').text('Asal RY Design');
    $('#about1').text("Cerita kami dimulai pada tahun 1990 ketika pendiri Janto 'Ricky' Sutedja memulai proyek penelitian tentang teknologi pengeras suara baru yang revolusioner yang dapat memberikan kualitas suara yang ia inginkan. Namun, setelah 4 tahun melakukan penelitian dan pengembangan, ia masih tidak mampu mencapai kualitas dan kaliber yang sulit ditemukan, sebagai hasilnya, ditinggalkan penelitiannya untuk membuka toko elektronik karena dana tidak mencukupi.");
    $('#about2').text('Akan tetapi, bahkan setelah ia resmi meninggalkan proyek, Ricky terus meneliti dan mengembangkan visinya sambil mengoperasi toko elektronik full time. Kemudian pada tahun 1999, ia akhirnya memiliki terobosan teknologi. Hasilnya adalah sistem suara yang terdiri dari hanya speaker satelit 16 cm yang disertai dengan berbagai speaker satelit miniatur. Kerangka yang revolusioner ini segera dipatenkan dan diproduksi massal dengan produk akhir ditujukan untuk grosir.');
    $('#about3').text('Bertekad untuk memasarkan desainnya secara global, Ricky dengan penuh sesal menutup etalasenya untuk terakhir kalinya dan memulai bisnis baru untuk menjual desainnya. Dia mengosongkan tabungan, melikuidasi asetnya, dan menandatangani beberapa pinjaman untuk mengumpulkan dana untuk visinya. Produksi dikerjakan dengan tangan bersama-sama dengan dua karyawan lain. Setahun setelah pembukaan toko utama, dedikasi dan kerja keras Ricky cepat terbayar ketika produk barunya yang inovatif diketahui oleh masyarakat umum. Klien-klien lama kami mencakup mantan Menteri Perdagangan Republik Indonesia dan pengusaha sukses Rahmat Gobel, tokoh penting dalam pengembangan perusahaan kami.');
    $('#about4').text('Saat ini, kami masih memproduksi dengan tangan di Tangerang untuk memperoleh hasil yang unggul dan berkualitas. Terlepas dari penawaran awal kami, kami sekarang menyediakan speaker bas turbo yang dapat digunakan di ruangan besar yang bisa menampung ratusan orang. Juga tersedia sistem speaker bas profesional 400 watt satu-satunya di dunia dengan kemampuan kinerja tinggi dan daya speaker biasa 800-1,200 watt.');

    // Chat page translation to Indonesian
    $('#chatBlurb').text('Silahkan membahas tentang peralatan audio kami dengan salah satu karyawan RY Design atau pelanggan lain.');
}

else if (window.localStorage.getItem('language') == "zh-Hans") {
    document.getElementsByTagName('html')[0].setAttribute('lang', 'zh-Hans');  // change page's main language to Chinese

    // Home page translation to Chinese
    $('#homeInfo1').text('热烈欢迎您来到Ry Design，唯一可以保证质量最先进最优质的音响设备国际高科技企业。我们的目标，梦想是让全球的民众在一个注重快速及高效率的通讯世界里都可以享受到及优惠及高质量的音响设备。');
    $('#homeMiniTitle').text('我们的任务');
    $('#homeInfo2').text('我们引以满足以及超越顾客的需求为荣，利用本公司最先进的高科技术来为顾客提供一流的音响体验。若您需要帮助或有任何的疑问的话，我们可以确保您收到最专业及最有利的服务与解答。本公司的宗旨是为顾客提供最好及最棒的服务，并且提供各式各样的设施来进一步及超越顾客的需求。');

    // About page translation to Chinese
    $('#aboutTitle').text('');
    $('#about1').text("本公司的来历追溯到二十五年前的一九九零年，创始者 Janto 'Ricky' Sutedja 当时开始投入专研梦寐以求的高质量音响播放技术。但经过了四年的艰辛，他的努力仍然未达成他所追求的理想。而因资金不足和无能为力之下，他只好无可奈何地放弃他长年的研究，转开了一家小型电子产品店。");
    $('#about2').text('虽然无法向以前一样只专注研究新科技，但任然不放弃地一面经营生意一面坚持着自己的理想。终于在一九九九年时有了前所未有的突破。他所创造出来的音响设备是一个只有十六厘米高的主要播音器和几个微型的外加播音器。这独特的音响设计很快就被公众公认及被许多商家大量生产，以致今家喻户晓的音响播放器。');
    $('#about3').text('');
    $('#about4').text('');
}

else {
    document.getElementsByTagName('html')[0].setAttribute('lang', 'en');

    // Home page translation to English
    $('#homeInfo1').text('Welcome to RY Design, the global high technology company that guarantees the production of only the best audio equipment. Our focus is on realising our company’s core belief in that anyone should be able to enjoy superior yet affordable auditory systems in a world of instant communication where speed and reliability is foremost in our busy and on-the-go world.');
    $('#homeMiniTitle').text('Our mission');
    $('#homeInfo2').text("RY Design prides itself in ensuring that its customers receive the best sound experience they'll ever feel through our innovative product offerings, high quality standards and cutting edge technological research. When you seek our help, you can be sure you receive professional advice tailored to suit you, our client’s needs and specifications. We aim only to deliver the best which is why we have a wide range of offerings ranging for use in corporate environments to hospitality catering or for private enjoyment.");

    // About page translation to English
    $('#aboutTitle').text('Origin of RY Design');
    $('#about1').text("Our story begins in 1990 when founder Janto ‘Ricky’ Sutedja started his research project on revolutionary new speaker technology that could deliver the sound quality that he longed for. However, after 4 hard years of research and development, he still was not able to achieve that elusive quality and calibre, as a result abandoned his research in favour of opening an electronics store due to insufficient funding.");
    $('#about2').text('However, even after he formally abandoned his project, Ricky continued to research and develop his vision whilst operating his electronics store full time. Then in 1999, he finally had a technological breakthrough. The result was a sound system consisting of only a 16 cm tall satellite speaker with numerous accompanying miniature satellite speakers. This revolutionary blueprint was quickly patented and mass produced with the final product intended for wholesale.');
    $('#about3').text('Determined to market his design globally, Ricky regretfully closed his storefront for the last time and started a new dedicated business to sell his design. He emptied his savings, liquidated his assets and signed multiple loans in order to raise more funds for his vision. Production was done by hand together with two additional employees. A year after the opening of the flagship store, Ricky’s dedication and hard work quickly began to pay off as his innovative new products was noticed by the mainstream audience. Our past clients have included former Indonesian Minister of Trade and a successful entrepreneur Rahmat Gobel, also a key figure in the expansion of our enterprise.');
    $('#about4').text('Currently, we still continue production by hand in Tangerang for superior craftsmanship and quality. Apart from our original offerings, our extensive repertoire of systems now include a turbo bass speaker that can be used in large chambers for a gathering of hundreds. Also available is the world’s only 400 watt professional bass speaker system with the high performance capabilities and power output of ordinary 800-1,200 watt speakers.');

    // Chat page translation to English
    $('#chatBlurb').text('Feel free to discuss our audio equipments with one of our RY Design employees or other customers.');
}