if (window.localStorage.getItem('language') == null) window.localStorage.setItem('language', window.navigator.userLanguage || window.navigator.language);

function changeLanguage(language) {
    window.localStorage.setItem('language', language);
    pageLanguage.currentLanguage(language);  // for facebooklogin.js
    if (window.location.pathname == "/forumPage.html") forumLanguage.currentLanguage(language);  // for forum.js
    location.reload();
}

if (window.localStorage.getItem('language') == "id") {
    document.getElementsByTagName('html')[0].setAttribute('lang', 'id');  // change page's main language to Indonesian

    // Navigation bar to Indonesian
    $('#navbar_index').text('Rumah');
    $('#navbar_about').text('Tentang kita');
    $('#navbar_products').text('Produk');
    $('#navbar_contact').text('Kontak kita');
    $('#navbar_forumPage').text('Forum');
    $('#navbar_chatPage').text('Live Chat');
    $('#navbar_language').text('Bahasa↓');

    if (window.location.pathname == "/" || window.location.pathname == "/index.html") { // Home page translation to Indonesian
        $('#homeInfo1').text('Selamat Datang di RY Design, perusahaan teknologi tinggi global yang menjamin produksi peralatan audio yang terbaik. Fokus kami adalah mewujudkan misi perusahaan kami, yaitu siapapun berhak untuk menikmati sistem pendengaran yang terbaik dengan harga yang terjangkau.');
        $('#homeMiniTitle').text('Misi kita');
        $('#homeInfo2').text('RY Design membanggakan diri dalam memastikan bahwa pelanggan menerima pengalaman suara terbaik yang pernah mereka alami dari produk inovatif kami, yang berkualitas tinggi dan penelitian teknologi yang paling mutakhir. Ketika anda butuh bantuan dari kami, anda akan menerima nasihat profesional yang sesuai dengan kebutuhan dan spesifikasi anda, klien kami. Misi kami adalah untuk memberikan yang terbaik, maka dari itu kita memiliki berbagai produk yang bisa digunakan di segala lingkungan.');
    }

    else if (window.location.pathname == "/about.html") { // About page translation to Indonesian
        $('#aboutTitle').text('Asal RY Design');
        $('#about1').text("Cerita kami dimulai pada tahun 1990 ketika pendiri Janto 'Ricky' Sutedja memulai proyek penelitian tentang teknologi pengeras suara baru yang revolusioner yang dapat memberikan kualitas suara yang ia inginkan. Namun, setelah 4 tahun melakukan penelitian dan pengembangan, ia masih tidak mampu mendapatkan kualitas suara yang dia inginkan sebagai hasilnya, dia meninggalkan penelitiannya untuk membuka toko elektronik karena dana tidak mencukupi.");
        $('#about2').text('Akan tetapi, setelah ia meninggalkan proyek, Ricky terus meneliti dan mengembangkan visinya sambil menjalankan toko elektronik. Pada tahun 1999, ia akhirnya memiliki terobosan teknologi. Hasilnya adalah sistem suara yang terdiri dari hanya speaker satelit 16 cm yang disertai dengan berbagai speaker satelit miniatur. Kerangka yang revolusioner ini segera dipatenkan dan diproduksi massal dengan produk akhir ditujukan untuk grosir.');
        $('#about3').text('Bertekad untuk memasarkan desainnya secara global, Ricky dengan penuh sesal menutup tokonya dan memulai bisnis baru untuk menjual desainnya. Dia mengosongkan tabungan, melikuidasi asetnya, dan mendapatkan beberapa pinjaman untuk mengumpulkan dana untuk mewujudkan visinya. Produksi dikerjakan dengan tangan bersama-sama dengan dua karyawan lain. Setahun setelah pembukaan toko utama, dedikasi dan kerja keras Ricky cepat terbayar ketika produk barunya yang inovatif mulai diketahui oleh masyarakat umum. Klien-klien setia kami mencakup mantan Menteri Perdagangan Republik Indonesia dan pengusaha sukses Rahmat Gobel, tokoh penting dalam pengembangan perusahaan kami.');
        $('#about4').text('Saat ini, kami masih memproduksi dengan tangan di Tangerang untuk memperoleh hasil yang unggul dan berkualitas. Selain produk asli kami, kami sekarang menyediakan speaker bas turbo yang dapat digunakan di ruangan besar yang bisa menampung ratusan orang. Kami juga menyediakan satu-satunya sistem speaker bas profesional 400 watt di dunia, yang mempunyai kinerja dan setara dengan speaker 800-1,200 watt.');
    }

    else if (window.location.pathname == "/products.html") { // Products page to Indonesian
        $('#productsTitle').text('Produk kita');
    }

    else if (window.location.pathname == "/contact.html") { // Contact page to Indonesian
        $('#contactTitle').text('Kontak kita');
    }

    else if (window.location.pathname == "/chatPage.html") { // Chat page translation to Indonesian
        $('#chatTitle').text('Live Chat');
        $('#chatBlurb').text('Silahkan membahas tentang peralatan audio kami dengan salah satu karyawan RY Design atau pelanggan lain.');
    }

    else if (window.location.pathname == "/forumPage.html") { // Forum page translation to Indonesian
        $('#forumTitle').text('Forums');
        $('#addAnotherForum').val('Tambah forum baru');
    }

    else if (window.location.pathname == "/feedbackPage.html") { // Feedback page translation to Indonesian
        $('#feedbackTitle').text('Saran');
        $('#addAnotherFeedback').val('Tambah saran baru');
        $('#goBackToForum').val('Balik ke forum');
    }

    else if (window.location.pathname == "/addForum.html") { // Add forum page translation to Indonesian
        $('#addForumTitle').text('Tambah forum');
        $('#goBackToForum').val('Balik ke forum');
        $('#createForum').val('Bikin');
        document.getElementById('forumHead').innerHTML = "Judul Forum:";
    }

    else if (window.location.pathname == "/addFeedback.html") { // Add feedback page translation to Indonesian
        $('#addFeedbackTitle').text('Tambah saran');
        $('#goBackToFeedback').val('Balik ke saran');
        $('#createFeedback').val('Bikin');
        document.getElementById('feedbackHead').innerHTML = "Isi Saran:";
    }
}

else if (window.localStorage.getItem('language') == "zh-Hans") {
    document.getElementsByTagName('html')[0].setAttribute('lang', 'zh-Hans');  // change page's main language to Chinese

    // Navigation bar translation to Chinese
    $('#navbar_index').text('主页');
    $('#navbar_about').text('关于我们');
    $('#navbar_products').text('产品');
    $('#navbar_contact').text('联系我们');
    $('#navbar_forumPage').text('论坛');
    $('#navbar_chatPage').text('在线聊天');
    $('#navbar_language').text('语言↓');

    if (window.location.pathname == "/" || window.location.pathname == "/index.html") { // Home page translation to Chinese
        $('#homeInfo1').text('热烈欢迎您来到 Ry Design，唯一可以保证质量最先进，最优质的音响设备国际高科技企业。我们的目标，梦想是让全球的民众在一个注重快速及高效率的通讯世界里，都可以享受到及优惠及高质量的音响设备。');
        $('#homeMiniTitle').text('我们的任务');
        $('#homeInfo2').text('我们引以满足以及超越顾客的需求为荣，利用本公司最先进的高科技术来为顾客提供一流的音响体验。若您需要帮助或有任何的疑问的话，我们可以确保您收到最专业及最有利的服务与解答。本公司的宗旨是为顾客提出最好及最棒的服务，并且提供各式各样的设施来进一步及超越顾客的需求。');
    }

    else if (window.location.pathname == "/about.html") { // About page translation to Chinese
        $('#aboutTitle').text('RY Design 的来历');
        $('#about1').text("本公司的来历追溯到二十五年前的一九九零年，创始者 Janto 'Ricky' Sutedja 当时开始投入专研梦寐以求的高质量音响播放技术。但经过了四年的艰辛，他的努力仍然未达成他所追求的理想。而因资金不足和无能为力之下，他只好无可奈何地放弃他长年的研究，转开了一家小型电子产品店。");
        $('#about2').text('虽然无法向以前一样只专注研究新科技，但任然不放弃地一面经营生意一面坚持着自己的理想。终于在一九九九年时有了前所未有的突破。他所创造出来的音响设备是一个只有十六厘米高的主要播音器和几个微型的外加播音器。这独特的音响设计很快就被公众公认及被许多商家大量生产，以致今家喻户晓的音响播放器。');
        $('#about3').text('为了完成未实现的梦想，Ricky 关闭他正经营的电子产品店而转投资了一家音响设备专卖店。而为开创新商业的资金是Ricky 本身用所以的私人资产及存款来抵押及投资。当时公司的产品都是未经用机械而是手工制造的，与两名聘请的员工协助下。经历了一年的艰辛劳苦后，他终于得到回报了，创新的商品很快的被顾客所喜爱。我们以往的客户有包括前任印尼交易部长以及成就企业家 Rahmat Gobel，是我们公司重要的发展人物之一。');
        $('#about4').text('直到现在，我们还是继续采用精巧的手工技术来制造本公司各式各样的产品品。不仅是本公司原本所推出多样化的产品之外，我们现在最新推出了可以提供上百人的大型聚会或活动的涡轮低音播音器，而且这只需四百瓦的专业播音器是世界上唯一可以与普通的八百至一千二百瓦的专业播音器比较。');
    }

    else if (window.location.pathname == "/products.html") { // Products page translation to Chinese
        $('#productsTitle').text('我们的产品');
    }

    else if (window.location.pathname == "/contact.html") { // Contact page translation to Chinese
        $('#contactTitle').text('联系我们');
    }

    else if (window.location.pathname == "/chatPage.html") { // Chat page translation to Chinese
        $('#chatTitle').text('在线聊天');
        $('#chatBlurb').text('客户们可以随时和 RY DESIGN 的员工或其他客户讨论我们的音响设备。');
    }

    else if (window.location.pathname == "/forumPage.html") { // Forum page translation to Chinese
        $('#forumTitle').text('论坛');
        $('#addAnotherForum').val('创新论坛');
    }

    else if (window.location.pathname == "/feedbackPage.html") { // Feedback page translation to Chinese
        $('#feedbackTitle').text('客户意见');
        $('#addAnotherFeedback').val('写新意见');
        $('#goBackToForum').val('回到论坛');
    }

    else if (window.location.pathname == "/addForum.html") { // Add forum page translation to Chinese
        $('#addForumTitle').text('开新论坛');
        $('#goBackToForum').val('回到论坛');
        $('#createForum').val('创造');
        document.getElementById('forumHead').innerHTML = "论坛的标题：";
    }

    else if (window.location.pathname == "/addFeedback.html") { // Add feedback page translation to Chinese
        $('#addFeedbackTitle').text('写意见');
        $('#goBackToFeedback').val('回到留言板');
        $('#createFeedback').val('创造');
        document.getElementById('feedbackHead').innerHTML = "留言板的内容：";
    }
}

else {
    document.getElementsByTagName('html')[0].setAttribute('lang', 'en');

    // Navigation bar
    $('#navbar_index').text('Home');
    $('#navbar_about').text('About us');
    $('#navbar_products').text('Products');
    $('#navbar_contact').text('Contact us');
    $('#navbar_forumPage').text('Forum');
    $('#navbar_chatPage').text('Live Chat');
    $('#navbar_language').text('Language↓');

    if (window.location.pathname == "/" || window.location.pathname == "/index.html") { // Home page
        $('#homeInfo1').text('Welcome to RY Design, the global high technology company that guarantees the production of only the best audio equipment. Our focus is on realising our company’s core belief; that anyone should be able to enjoy superior, yet affordable  auditory systems in a world of instant communication, where speed and reliability is foremost in our busy and on-the-go world.');
        $('#homeMiniTitle').text('Our mission');
        $('#homeInfo2').text("RY Design prides itself in ensuring that its customers receive the best sound experience they'll ever feel through our innovative product offerings, high quality standards and cutting edge technological research. When you seek our help, you can be sure you receive professional advice tailored to suit you, our client’s needs and specifications. We aim only to deliver the best which is why we have a wide range of offerings ranging for use in corporate environments to hospitality catering or for private enjoyment.");
    }

    else if (window.location.pathname == "/about.html") { // About page
        $('#aboutTitle').text('Origin of RY Design');
        $('#about1').text("Our story begins in 1990 when founder Janto ‘Ricky’ Sutedja started his research project on revolutionary new speaker technology that could deliver the sound quality that he longed for. However, after 4 hard years of research and development, he still was not able to achieve that elusive quality and calibre, as a result abandoned his research in favour of opening an electronics store due to insufficient funding.");
        $('#about2').text('However, even after he formally abandoned his project, Ricky continued to research and develop his vision whilst operating his electronics store full time. Then in 1999, he finally had a technological breakthrough. The result was a sound system consisting of only a 16 cm tall satellite speaker with numerous accompanying miniature satellite speakers. This revolutionary blueprint was quickly patented and mass produced with the final product intended for wholesale.');
        $('#about3').text('Determined to market his design globally, Ricky regretfully closed his storefront for the last time and started a new dedicated business to sell his design. He emptied his savings, liquidated his assets and signed multiple loans in order to raise more funds for his vision. Production was done by hand together with two additional employees. A year after the opening of the flagship store, Ricky’s dedication and hard work quickly began to pay off as his innovative new products was noticed by the mainstream audience. Our past clients have included former Indonesian Minister of Trade and a successful entrepreneur Rahmat Gobel, also a key figure in the expansion of our enterprise.');
        $('#about4').text('Currently, we still continue production by hand in Tangerang for superior craftsmanship and quality. Apart from our original offerings, our extensive repertoire of systems now include a turbo bass speaker that can be used in large chambers for a gathering of hundreds. Also available is the world’s only 400 watt professional bass speaker system with the high performance capabilities and power output of ordinary 800-1,200 watt speakers.');
    }

    else if (window.location.pathname == "/products.html") { // Products page
        $('#productsTitle').text('Our Products');
    }

    else if (window.location.pathname == "/contact.html") { // Contact page
        $('#contactTitle').text('Contact us');
    }

    else if (window.location.pathname == "/chatPage.html") { // Chat page
        $('#chatTitle').text('Live Chat');
        $('#chatBlurb').text('Feel free to discuss our audio equipment with one of our RY Design employees or other customers.');
    }

    else if (window.location.pathname == "/forumPage.html") { // Forum page
        $('#forumTitle').text('Forums');
        $('#addAnotherForum').val('Create new forum');
    }

    else if (window.location.pathname == "/feedbackPage.html") { // Feedback page
        $('#feedbackTitle').text('Feedbacks');
        $('#addAnotherFeedback').val('Create new feedback');
        $('#goBackToForum').val('Go back to forum');
    }

    else if (window.location.pathname == "/addForum.html") { // Add forum page
        $('#addForumTitle').text('Add forum');
        $('#goBackToForum').val('Go back to forum');
        $('#createForum').val('Create');
        document.getElementById('forumHead').innerHTML = "Title of Forum:";
    }

    else if (window.location.pathname == "/addFeedback.html") { // Add feedback page
        $('#addFeedbackTitle').text('Add feedback');
        $('#goBackToFeedback').val('Go back to feedback');
        $('#createFeedback').val('Create');
        document.getElementById('feedbackHead').innerHTML = "Content of Feedback:";
    }
}