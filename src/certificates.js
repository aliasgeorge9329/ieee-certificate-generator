MD5 = function (e) {
  function h(a, b) {
    var c, d, e, f, g;
    e = a & 2147483648;
    f = b & 2147483648;
    c = a & 1073741824;
    d = b & 1073741824;
    g = (a & 1073741823) + (b & 1073741823);
    return c & d
      ? g ^ 2147483648 ^ e ^ f
      : c | d
      ? g & 1073741824
        ? g ^ 3221225472 ^ e ^ f
        : g ^ 1073741824 ^ e ^ f
      : g ^ e ^ f;
  }

  function k(a, b, c, d, e, f, g) {
    a = h(a, h(h((b & c) | (~b & d), e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function l(a, b, c, d, e, f, g) {
    a = h(a, h(h((b & d) | (c & ~d), e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function m(a, b, d, c, e, f, g) {
    a = h(a, h(h(b ^ d ^ c, e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function n(a, b, d, c, e, f, g) {
    a = h(a, h(h(d ^ (b | ~c), e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function p(a) {
    var b = "",
      d = "",
      c;
    for (c = 0; 3 >= c; c++)
      (d = (a >>> (8 * c)) & 255),
        (d = "0" + d.toString(16)),
        (b += d.substr(d.length - 2, 2));
    return b;
  }
  var f = [],
    q,
    r,
    s,
    t,
    a,
    b,
    c,
    d;
  e = (function (a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", d = 0; d < a.length; d++) {
      var c = a.charCodeAt(d);
      128 > c
        ? (b += String.fromCharCode(c))
        : (127 < c && 2048 > c
            ? (b += String.fromCharCode((c >> 6) | 192))
            : ((b += String.fromCharCode((c >> 12) | 224)),
              (b += String.fromCharCode(((c >> 6) & 63) | 128))),
          (b += String.fromCharCode((c & 63) | 128)));
    }
    return b;
  })(e);
  f = (function (b) {
    var a,
      c = b.length;
    a = c + 8;
    for (
      var d = 16 * ((a - (a % 64)) / 64 + 1), e = Array(d - 1), f = 0, g = 0;
      g < c;

    )
      (a = (g - (g % 4)) / 4),
        (f = (g % 4) * 8),
        (e[a] |= b.charCodeAt(g) << f),
        g++;
    a = (g - (g % 4)) / 4;
    e[a] |= 128 << ((g % 4) * 8);
    e[d - 2] = c << 3;
    e[d - 1] = c >>> 29;
    return e;
  })(e);
  a = 1732584193;
  b = 4023233417;
  c = 2562383102;
  d = 271733878;
  for (e = 0; e < f.length; e += 16)
    (q = a),
      (r = b),
      (s = c),
      (t = d),
      (a = k(a, b, c, d, f[e + 0], 7, 3614090360)),
      (d = k(d, a, b, c, f[e + 1], 12, 3905402710)),
      (c = k(c, d, a, b, f[e + 2], 17, 606105819)),
      (b = k(b, c, d, a, f[e + 3], 22, 3250441966)),
      (a = k(a, b, c, d, f[e + 4], 7, 4118548399)),
      (d = k(d, a, b, c, f[e + 5], 12, 1200080426)),
      (c = k(c, d, a, b, f[e + 6], 17, 2821735955)),
      (b = k(b, c, d, a, f[e + 7], 22, 4249261313)),
      (a = k(a, b, c, d, f[e + 8], 7, 1770035416)),
      (d = k(d, a, b, c, f[e + 9], 12, 2336552879)),
      (c = k(c, d, a, b, f[e + 10], 17, 4294925233)),
      (b = k(b, c, d, a, f[e + 11], 22, 2304563134)),
      (a = k(a, b, c, d, f[e + 12], 7, 1804603682)),
      (d = k(d, a, b, c, f[e + 13], 12, 4254626195)),
      (c = k(c, d, a, b, f[e + 14], 17, 2792965006)),
      (b = k(b, c, d, a, f[e + 15], 22, 1236535329)),
      (a = l(a, b, c, d, f[e + 1], 5, 4129170786)),
      (d = l(d, a, b, c, f[e + 6], 9, 3225465664)),
      (c = l(c, d, a, b, f[e + 11], 14, 643717713)),
      (b = l(b, c, d, a, f[e + 0], 20, 3921069994)),
      (a = l(a, b, c, d, f[e + 5], 5, 3593408605)),
      (d = l(d, a, b, c, f[e + 10], 9, 38016083)),
      (c = l(c, d, a, b, f[e + 15], 14, 3634488961)),
      (b = l(b, c, d, a, f[e + 4], 20, 3889429448)),
      (a = l(a, b, c, d, f[e + 9], 5, 568446438)),
      (d = l(d, a, b, c, f[e + 14], 9, 3275163606)),
      (c = l(c, d, a, b, f[e + 3], 14, 4107603335)),
      (b = l(b, c, d, a, f[e + 8], 20, 1163531501)),
      (a = l(a, b, c, d, f[e + 13], 5, 2850285829)),
      (d = l(d, a, b, c, f[e + 2], 9, 4243563512)),
      (c = l(c, d, a, b, f[e + 7], 14, 1735328473)),
      (b = l(b, c, d, a, f[e + 12], 20, 2368359562)),
      (a = m(a, b, c, d, f[e + 5], 4, 4294588738)),
      (d = m(d, a, b, c, f[e + 8], 11, 2272392833)),
      (c = m(c, d, a, b, f[e + 11], 16, 1839030562)),
      (b = m(b, c, d, a, f[e + 14], 23, 4259657740)),
      (a = m(a, b, c, d, f[e + 1], 4, 2763975236)),
      (d = m(d, a, b, c, f[e + 4], 11, 1272893353)),
      (c = m(c, d, a, b, f[e + 7], 16, 4139469664)),
      (b = m(b, c, d, a, f[e + 10], 23, 3200236656)),
      (a = m(a, b, c, d, f[e + 13], 4, 681279174)),
      (d = m(d, a, b, c, f[e + 0], 11, 3936430074)),
      (c = m(c, d, a, b, f[e + 3], 16, 3572445317)),
      (b = m(b, c, d, a, f[e + 6], 23, 76029189)),
      (a = m(a, b, c, d, f[e + 9], 4, 3654602809)),
      (d = m(d, a, b, c, f[e + 12], 11, 3873151461)),
      (c = m(c, d, a, b, f[e + 15], 16, 530742520)),
      (b = m(b, c, d, a, f[e + 2], 23, 3299628645)),
      (a = n(a, b, c, d, f[e + 0], 6, 4096336452)),
      (d = n(d, a, b, c, f[e + 7], 10, 1126891415)),
      (c = n(c, d, a, b, f[e + 14], 15, 2878612391)),
      (b = n(b, c, d, a, f[e + 5], 21, 4237533241)),
      (a = n(a, b, c, d, f[e + 12], 6, 1700485571)),
      (d = n(d, a, b, c, f[e + 3], 10, 2399980690)),
      (c = n(c, d, a, b, f[e + 10], 15, 4293915773)),
      (b = n(b, c, d, a, f[e + 1], 21, 2240044497)),
      (a = n(a, b, c, d, f[e + 8], 6, 1873313359)),
      (d = n(d, a, b, c, f[e + 15], 10, 4264355552)),
      (c = n(c, d, a, b, f[e + 6], 15, 2734768916)),
      (b = n(b, c, d, a, f[e + 13], 21, 1309151649)),
      (a = n(a, b, c, d, f[e + 4], 6, 4149444226)),
      (d = n(d, a, b, c, f[e + 11], 10, 3174756917)),
      (c = n(c, d, a, b, f[e + 2], 15, 718787259)),
      (b = n(b, c, d, a, f[e + 9], 21, 3951481745)),
      (a = h(a, q)),
      (b = h(b, r)),
      (c = h(c, s)),
      (d = h(d, t));
  return (p(a) + p(b) + p(c) + p(d)).toLowerCase();
};

const addText = (text) => {
  let main = document.querySelector(".main");
  var h = document.createElement("H2");
  var t = document.createTextNode(text);
  h.appendChild(t);
  main.appendChild(h);
};

const titleCase = (str) => {
  str = str.split(/[ ._]+/);
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > 2) {
      str[i] =
        str[i].toLowerCase().charAt(0).toUpperCase() +
        str[i].slice(1).toLowerCase();
    }
  }
  return str.join(" ");
};

const generateFlutterAndDart22PDF = async (
  name,
  college,
  lecture,
  category
) => {
  let main = document.querySelector(".main");
  const { PDFDocument, rgb } = PDFLib;

  certificate1 = "";
  exBytes1 = "";
  exBytes2 = "";
  exFont1 = "";
  exFontSub1 = "";

  if (lecture === "Fluter and Dart Workshop") {
    certificate1 = await fetch(
      "./certificates/cert-data/flutteranddart22/data.json"
    ).then((res) => {
      return res.json();
    });

    exFont1 = await fetch("./fonts/" + certificate1.name.fontName).then(
      (res) => {
        return res.arrayBuffer();
      }
    );

    exFontSub1 = await fetch("./fonts/" + certificate1.paragraph.fontName).then(
      (res) => {
        return res.arrayBuffer();
      }
    );

    if (category === "p") {
      exBytes1 = await fetch(
        "./certificates/cert-pdf/flutteranddart22/part.pdf"
      ).then((res) => {
        return res.arrayBuffer();
      });

      const pdfDoc1 = await PDFDocument.load(exBytes1);

      pdfDoc1.registerFontkit(fontkit);
      const myFont1 = await pdfDoc1.embedFont(exFont1);
      const pages1 = pdfDoc1.getPages();
      const firstPg1 = pages1[0];

      if (name != null) {
        name = name.trim();
        name = titleCase(name);
        firstPg1.drawText(name, {
          size: certificate1.name.fontSize,
          x: certificate1.name.x - (name.length > 10 ? name.length * 3 : 0),
          y: certificate1.name.y,
          color: rgb(
            certificate1.paragraph.fontColor.r,
            certificate1.paragraph.fontColor.g,
            certificate1.paragraph.fontColor.b
          ),
          font: myFont1,
        });
      }

      var qr = new QRious({
        value: window.location.href,
        foreground: certificate1.qrCode.foreground,
        background: certificate1.qrCode.background,
      });

      qr = qr.toDataURL();
      const qrImage = await pdfDoc1.embedPng(qr);

      firstPg1.drawImage(qrImage, {
        x: certificate1.qrCode.x,
        y: certificate1.qrCode.y,
        width: 100,
        height: 100,
      });

      const uri = await pdfDoc1.saveAsBase64({ dataUri: true });
      var h2 = document.createElement("H3");
      var t2 = document.createTextNode(
        name +
          " from " +
          college +
          " successfully participated for the " +
          lecture
      );

      var h = document.createElement("H3");
      var t = document.createTextNode(lecture + " Participation Certificate");

      h2.appendChild(t2);
      main.removeChild(main.lastElementChild);
      main.appendChild(h2);

      h.appendChild(t);
      main.appendChild(h);

      var elem = document.createElement("img");
      elem.setAttribute("src", "./static/img/download-icon.png");
      elem.setAttribute("id", "download-button");
      elem.setAttribute("height", "30");
      elem.setAttribute("width", "30");

      var anchor = document.createElement("a");
      anchor.href = uri;

      anchor.download =
        lecture.replace(/ /g, "").toLowerCase() + "certificate.pdf";
      anchor.appendChild(elem);
      main.appendChild(anchor);

      var enter = document.createElement("br");
      main.appendChild(enter);
      main.appendChild(enter);
    } else if (category === "pc") {
      exBytes1 = await fetch(
        "./certificates/cert-pdf/flutteranddart22/part.pdf"
      ).then((res) => {
        return res.arrayBuffer();
      });

      exBytes2 = await fetch(
        "./certificates/cert-pdf/flutteranddart22/pc.pdf"
      ).then((res) => {
        return res.arrayBuffer();
      });

      const pdfDoc1 = await PDFDocument.load(exBytes1);

      pdfDoc1.registerFontkit(fontkit);
      const myFont1 = await pdfDoc1.embedFont(exFont1);
      const pages1 = pdfDoc1.getPages();
      const firstPg1 = pages1[0];

      if (name != null) {
        name = name.trim();
        name = titleCase(name);
        firstPg1.drawText(name, {
          size: certificate1.name.fontSize,
          x: certificate1.name.x - (name.length > 10 ? name.length * 3 : 0),
          y: certificate1.name.y,
          color: rgb(
            certificate1.paragraph.fontColor.r,
            certificate1.paragraph.fontColor.g,
            certificate1.paragraph.fontColor.b
          ),
          font: myFont1,
        });
      }

      var qr = new QRious({
        value: window.location.href,
        foreground: certificate1.qrCode.foreground,
        background: certificate1.qrCode.background,
      });

      qr = qr.toDataURL();
      const qrImage = await pdfDoc1.embedPng(qr);

      firstPg1.drawImage(qrImage, {
        x: certificate1.qrCode.x,
        y: certificate1.qrCode.y,
        width: 100,
        height: 100,
      });

      const uri = await pdfDoc1.saveAsBase64({ dataUri: true });

      const pdfDoc2 = await PDFDocument.load(exBytes2);

      pdfDoc2.registerFontkit(fontkit);
      const myFont2 = await pdfDoc2.embedFont(exFont1);

      const pages2 = pdfDoc2.getPages();
      const firstPg2 = pages2[0];

      if (name != null) {
        name = name.trim();
        name = titleCase(name);

        firstPg2.drawText(name, {
          size: certificate1.name.fontSize,
          x: certificate1.name.x - (name.length > 10 ? name.length * 3 : 0),
          y: certificate1.name.y,
          color: rgb(
            certificate1.paragraph.fontColor.r,
            certificate1.paragraph.fontColor.g,
            certificate1.paragraph.fontColor.b
          ),
          font: myFont2,
        });
      }

      var qr2 = new QRious({
        value: window.location.href,
        foreground: certificate1.qrCode.foreground,
        background: certificate1.qrCode.background,
      });

      qr2 = qr2.toDataURL();
      const qrImage2 = await pdfDoc2.embedPng(qr2);

      firstPg2.drawImage(qrImage2, {
        x: certificate1.qrCode.x,
        y: certificate1.qrCode.y,
        width: 100,
        height: 100,
      });

      const uri1 = await pdfDoc2.saveAsBase64({ dataUri: true });

      var h2 = document.createElement("H3");
      var t2 = document.createTextNode(
        name + " from " + college + " successfully completed the " + lecture
      );

      var h = document.createElement("H3");
      var t = document.createTextNode(lecture + " Participation Certificate");

      var h1 = document.createElement("H3");
      var t1 = document.createTextNode(
        lecture + " Project Completion Certificate"
      );

      h2.appendChild(t2);
      main.removeChild(main.lastElementChild);
      main.appendChild(h2);

      h.appendChild(t);
      main.appendChild(h);

      var elem = document.createElement("img");
      elem.setAttribute("src", "./static/img/download-icon.png");
      elem.setAttribute("id", "download-button");
      elem.setAttribute("height", "30");
      elem.setAttribute("width", "30");

      var anchor = document.createElement("a");
      anchor.href = uri;

      anchor.download =
        lecture.replace(/ /g, "").toLowerCase() + "certificate.pdf";
      anchor.appendChild(elem);
      main.appendChild(anchor);

      var enter = document.createElement("br");
      main.appendChild(enter);
      main.appendChild(enter);

      h1.appendChild(t1);
      main.appendChild(h1);

      var elem1 = document.createElement("img");
      elem1.setAttribute("src", "./static/img/download-icon.png");
      elem1.setAttribute("id", "download-button");
      elem1.setAttribute("height", "30");
      elem1.setAttribute("width", "30");

      var anchor1 = document.createElement("a");
      anchor1.href = uri1;

      anchor1.download =
        lecture.replace(/ /g, "").toLowerCase() + "certificate.pdf";
      anchor1.appendChild(elem1);
      main.appendChild(anchor1);
      var enter1 = document.createElement("br");
      main.appendChild(enter1);
    } else if (category === "v") {
      exBytes1 = await fetch(
        "./certificates/cert-pdf/flutteranddart22/vl.pdf"
      ).then((res) => {
        return res.arrayBuffer();
      });

      const pdfDoc1 = await PDFDocument.load(exBytes1);

      pdfDoc1.registerFontkit(fontkit);
      const myFont1 = await pdfDoc1.embedFont(exFont1);
      const pages1 = pdfDoc1.getPages();
      const firstPg1 = pages1[0];

      if (name != null) {
        name = name.trim();
        name = titleCase(name);
        firstPg1.drawText(name, {
          size: certificate1.name.fontSize,
          x: certificate1.name.x - (name.length > 10 ? name.length * 3 : 0),
          y: certificate1.name.y,
          color: rgb(
            certificate1.paragraph.fontColor.r,
            certificate1.paragraph.fontColor.g,
            certificate1.paragraph.fontColor.b
          ),
          font: myFont1,
        });
      }

      var qr = new QRious({
        value: window.location.href,
        foreground: certificate1.qrCode.foreground,
        background: certificate1.qrCode.background,
      });

      qr = qr.toDataURL();
      const qrImage = await pdfDoc1.embedPng(qr);

      firstPg1.drawImage(qrImage, {
        x: certificate1.qrCode.x,
        y: certificate1.qrCode.y,
        width: 100,
        height: 100,
      });

      const uri = await pdfDoc1.saveAsBase64({ dataUri: true });
      var h2 = document.createElement("H3");
      var t2 = document.createTextNode(
        name +
          " from " +
          college +
          " sucessfully volunteered for the " +
          lecture
      );

      var h = document.createElement("H3");
      var t = document.createTextNode(lecture + " Volunteer Certificate");

      h2.appendChild(t2);
      main.removeChild(main.lastElementChild);
      main.appendChild(h2);

      h.appendChild(t);
      main.appendChild(h);

      var elem = document.createElement("img");
      elem.setAttribute("src", "./static/img/download-icon.png");
      elem.setAttribute("id", "download-button");
      elem.setAttribute("height", "30");
      elem.setAttribute("width", "30");

      var anchor = document.createElement("a");
      anchor.href = uri;

      anchor.download =
        lecture.replace(/ /g, "").toLowerCase() + "certificate.pdf";
      anchor.appendChild(elem);
      main.appendChild(anchor);

      var enter = document.createElement("br");
      main.appendChild(enter);
      main.appendChild(enter);
    }
  }
};



const generateieeeExecom2022 = async (name, certificate, post,no) => {
  let main = document.querySelector(".main");
  const { PDFDocument, rgb } = PDFLib;

  certificate1 = "";
  exBytes1 = "";
  exFont1 = "";
  exFontSub1 = "";

  if (certificate === "IEEE EXECOM 2022") {
    certificate1 = await fetch(
      "./certificates/cert-data/ieeeexecom2022/data.json"
    ).then((res) => {
      return res.json();
    });

    exFont1 = await fetch("./fonts/" + certificate1.name.fontName).then(
      (res) => {
        return res.arrayBuffer();
      }
    );

    exFontSub1 = await fetch("./fonts/" + certificate1.post.fontName).then(
      (res) => {
        return res.arrayBuffer();
      }
    );

    exBytes1 = await fetch("./certificates/cert-pdf/ieeeexecom2022/b.pdf").then(
      (res) => {
        return res.arrayBuffer();
      }
    );

    const pdfDoc1 = await PDFDocument.load(exBytes1);

    pdfDoc1.registerFontkit(fontkit);
    const myFont1 = await pdfDoc1.embedFont(exFont1);
    const myFontSub1 = await pdfDoc1.embedFont(exFontSub1);
    const pages1 = pdfDoc1.getPages();
    const firstPg1 = pages1[0];

    if (name != null) {
      name = name.trim();
      name = titleCase(name);
      firstPg1.drawText(name, {
        size: certificate1.name.fontSize,
        x: certificate1.name.x - (name.length > 10 ? name.length * 3 : 0),
        y: certificate1.name.y,
        color: rgb(
          certificate1.name.fontColor.r,
          certificate1.name.fontColor.g,
          certificate1.name.fontColor.b
        ),
        font: myFont1,
      });
    }

    if (post != null) {
      post = post.trim();
      post = titleCase(post);
      firstPg1.drawText(post, {
        size: certificate1.post.fontSize,
        x: certificate1.post.x - (post.length > 10 ? post.length * 3 : 0),
        y: certificate1.post.y,
        color: rgb(
          certificate1.post.fontColor.r,
          certificate1.post.fontColor.g,
          certificate1.post.fontColor.b
        ),
        font: myFontSub1,
      });
    }

    if (no != null) {
      //no = no.trim();
      no = titleCase(no);
      firstPg1.drawText(no, {
        size: certificate1.no.fontSize,
        x: certificate1.no.x,
        y: certificate1.no.y,
        color: rgb(
          certificate1.no.fontColor.r,
          certificate1.no.fontColor.g,
          certificate1.no.fontColor.b
        ),
        font: myFontSub1,
      });
    }

    var qr = new QRious({
      value: window.location.href,
      foreground: certificate1.qrCode.foreground,
      background: certificate1.qrCode.background,
    });

    qr = qr.toDataURL();
    const qrImage = await pdfDoc1.embedPng(qr);

    firstPg1.drawImage(qrImage, {
      x: certificate1.qrCode.x,
      y: certificate1.qrCode.y,
      width: 100,
      height: 100,
    });

    const uri = await pdfDoc1.saveAsBase64({ dataUri: true });
    var h2 = document.createElement("H3");
    var t2 = document.createTextNode(
      "This certificate is presented to " +
        name +
        " in recognition for their contribution as " +
        post +
        " at the IEEE Student Branch NITC(IEEE SB NITC), NIT Calicut."
    );

    h2.appendChild(t2);
    main.removeChild(main.lastElementChild);
    main.appendChild(h2);

    var elem = document.createElement("img");
    elem.setAttribute("src", "./static/img/download-icon.png");
    elem.setAttribute("id", "download-button");
    elem.setAttribute("height", "30");
    elem.setAttribute("width", "30");

    var anchor = document.createElement("a");
    anchor.href = uri;

    anchor.download = "ieee_excom_2022_certificate.pdf";
    anchor.appendChild(elem);
    main.appendChild(anchor);

    var enter = document.createElement("br");
    main.appendChild(enter);
    main.appendChild(enter);
  }
};


const generatekathy2023 = async (name, certificate, college) => {
  let main = document.querySelector(".main");
  const { PDFDocument, rgb } = PDFLib;

  certificate1 = "";
  exBytes1 = "";
  exFont1 = "";
  exFontSub1 = "";

  if (certificate === "KATHY GIORI WORKSHOP 2023") {
    certificate1 = await fetch(
      "./certificates/cert-data/ieeeexecom2022/data.json"
    ).then((res) => {
      return res.json();
    });

    exFont1 = await fetch("./fonts/" + certificate1.name.fontName).then(
      (res) => {
        return res.arrayBuffer();
      }
    );

    exFontSub1 = await fetch("./fonts/" + certificate1.post.fontName).then(
      (res) => {
        return res.arrayBuffer();
      }
    );

    exBytes1 = await fetch("./certificates/cert-pdf/kathy_workshop_2023/kathy.pdf").then(
      (res) => {
        return res.arrayBuffer();
      }
    );

    const pdfDoc1 = await PDFDocument.load(exBytes1);

    pdfDoc1.registerFontkit(fontkit);
    const myFont1 = await pdfDoc1.embedFont(exFont1);
    const myFontSub1 = await pdfDoc1.embedFont(exFontSub1);
    const pages1 = pdfDoc1.getPages();
    const firstPg1 = pages1[0];

    if (name != null) {
      name = name.trim();
      name = titleCase(name);
      firstPg1.drawText(name, {
        size: certificate1.name.fontSize,
        x: 90 ,//- (name.length > 10 ? name.length * 3 : 0),
        y: 315,
        color: rgb(1,1,1),
        font: myFont1,
      });
    }

    if (college != null) {
      college = college.trim();
      college = titleCase(college);
      firstPg1.drawText(college, {
        size: certificate1.post.fontSize,
        x: 120 ,//- (college.length > 10 ? college.length * 3 : 0),
        y: 293,
        color: rgb(1,1,1),
        font: myFontSub1,
      });
    }



    var qr = new QRious({
      value: window.location.href,
      foreground: certificate1.qrCode.foreground,
      background: certificate1.qrCode.background,
    });

    qr = qr.toDataURL();
    const qrImage = await pdfDoc1.embedPng(qr);

    firstPg1.drawImage(qrImage, {
      x: 536,
      y: 85,
      width: 100,
      height: 100,
    });

    const uri = await pdfDoc1.saveAsBase64({ dataUri: true });
    var h2 = document.createElement("H3");
    var t2 = document.createTextNode(
      "This is to certify that " +
      name +
      " from " +
      college +
      " has attended a workshop on DIY Smart Home Demonstration and How to create your own Web Things with distinguished international speaker Kathy Giori conducted jointly by IEEE EDS SBC NIT Calicut and IEEE CSS SBC Sahrdaya in association with Tathva NIT Calicut on 11 September 2023."
  );

    h2.appendChild(t2);
    main.removeChild(main.lastElementChild);
    main.appendChild(h2);

    var elem = document.createElement("img");
    elem.setAttribute("src", "./static/img/download-icon.png");
    elem.setAttribute("id", "download-button");
    elem.setAttribute("height", "30");
    elem.setAttribute("width", "30");

    var anchor = document.createElement("a");
    anchor.href = uri;

    anchor.download = "certificate.pdf";
    anchor.appendChild(elem);
    main.appendChild(anchor);

    var enter = document.createElement("br");
    main.appendChild(enter);
    main.appendChild(enter);
  }
};


const checkUser = async (ID) => {
  let main = document.querySelector(".main");
  main.innerHTML = "";

  try {
    user = await fetch("./ieee-users/" + MD5(ID) + ".json").then((res) => {
      return res.json();
    });
  } catch (e) {
    addText("User not found");
    return null;
  }
  return user;
};

window.onload = (e) => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  let name = urlParams.get("name")?.replaceAll("-", "&");

  if (name === "fluteranddartworkshop") {
    const user = checkUser(id).then((user) => {
      if (user) {
        let main = document.querySelector(".main");
        var h1 = document.createElement("H2");
        var t1 = document.createTextNode("Loading your Certificate");
        h1.appendChild(t1);
        main.appendChild(h1);

        for (i = 0; i < user.length; i++) {
          for (j = 0; j < user[i].certificates.length; j++) {
            if (
              user[i].certificates[j].name.replace(/ /g, "").toLowerCase() ===
              name
            ) {
              if (user[i].certificates[j].hasCertificate) {
                generateFlutterAndDart22PDF(
                  user[i].name,
                  user[i].college,
                  user[i].certificates[j].name,
                  user[i].certificates[j].category
                );
              } else {
                main.removeChild(main.lastElementChild);
                addText("No Certificate for " + user[i].certificates[j].name);
              }
            }
          }
          if (j === 0) {
            main.removeChild(main.lastElementChild);
            addText("No Certificates Available");
          }
        }
      }
    });
  }

  
  if (name === "ieeeexecom2022") {
    const user = checkUser(id).then((user) => {
      if (user) {
        let main = document.querySelector(".main");
        var h1 = document.createElement("H2");
        var t1 = document.createTextNode("Loading your Certificate");
        h1.appendChild(t1);
        main.appendChild(h1);

        for (i = 0; i < user.length; i++) {
          for (j = 0; j < user[i].certificates.length; j++) {
            if (
              user[i].certificates[j].name.replace(/ /g, "").toLowerCase() ===
              name
            ) {
              if (user[i].certificates[j].hasCertificate) {
                generateieeeExecom2022(
                  user[i].name,
                  user[i].certificates[j].name,
                  user[i].certificates[j].post,
                  user[i].certificates[j].no,
                );
              } else {
                main.removeChild(main.lastElementChild);
                addText("No Certificate for " + user[i].certificates[j].name);
              }
            }
          }
          if (j === 0) {
            main.removeChild(main.lastElementChild);
            addText("No Certificates Available");
          }
        }
      }
    });
  }

  if (name === "kathygioriworkshop2023") {
    const user = checkUser(id).then((user) => {
      if (user) {
        let main = document.querySelector(".main");
        var h1 = document.createElement("H2");
        var t1 = document.createTextNode("Loading your Certificate");
        h1.appendChild(t1);
        main.appendChild(h1);

        for (i = 0; i < user.length; i++) {
          for (j = 0; j < user[i].certificates.length; j++) {
            if (
              user[i].certificates[j].name.replace(/ /g, "").toLowerCase() ===
              name
            ) {
              console.log("yes1")
              if (user[i].certificates[j].hasCertificate) {
                console.log("yes2")
                generatekathy2023(
                  user[i].name,
                  user[i].certificates[j].name, 
                  user[i].certificates[j].college
                );
              } else {
                main.removeChild(main.lastElementChild);
                addText("No Certificate for " + user[i].certificates[j].name);
              }
            }
          }
          if (j === 0) {
            main.removeChild(main.lastElementChild);
            addText("No Certificates Available");
          }
        }
      }
    });
  }
  
};
