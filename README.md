# LetzteChance.Org - Encypt DeCrypter

# LetzteChance.Org - Encypt DeCrypter Login v.1.0
 Password protection for static pages

This simple HTML document helps you protecting static pages using AES Encryption.

[LetzteChance.org Free Open Source Software](https://www.letztechance.org/)

## Setup

0. Upload the whole directory to your static hosting service.
1. Load it up in your browser, enter the keyprase and password of your choice
2. delete generator.html
3. It will show "wrong password", never mind.
4. Create a folder with that name next to the `index.html` file
5. Upload the content that you want to protect inside the folder
6. Protect source inside the folder

The final structure will be:

```
\css
\data
\filestructure.csv
\generator.html
\img
\index.html
\js
\LICENSE.txt
\README.md
\css\core.css
\css\styles.css
\data\data.json
\img\bg.jpg
\js\aes.js
\js\cipher-core.js
\js\core.js
\js\enc-base64.js
\js\enc-utf16.js
\js\evpkdf.js
\js\hmac.js
\js\jquery.js
\js\md5.js
\js\mode-cfb.js
\js\mode-ctr.js
\js\mode-ecb.js
\js\mode-ofb.js
\js\moment.js
\js\pad-ansix923.js
\js\pad-iso10126.js
\js\pad-iso97971.js
\js\pad-nopadding.js
\js\pad-zeropadding.js
\js\pbkdf2.js
\js\profile.js
\js\rabbit.js
\js\rc4.js
\js\sha1.js
\js\sha256.js
\js\sha3.js
\js\sha512.js
\js\tripledes.js
\js\x64-core.js
```

### Is this secure?
It´s realy secure. It secures the target by encryption, but does not prevent from protecting of the source file. 
The next update decyptes the target file at runtime. But that´s a future task.

### Protect the source security ?
0. If your hosting service offers directory listing, a visitor can bypass the protection.
1. There's no protection against brute force attack. Pick a very long and hard to guess password. 
2. The password's hash is part of the URI. __Enforce HTTPS__ to avoid man in the middle attacks.


Inspired by:
http://matteobrusa.github.io/Password-protection-for-static-pages/
https://github.com/matteobrusa/Tumbless


## Troubleshooting

0. Test coming soon...
