//LetzteChance.Org%20-%20Encypt%20DeCrypter%20Login%20v%20.1%20.01a&url=U2FsdGVkX1/L9kgsXThvXpggfZyS+OxLj/V4895WzmYJ+WFcV7ptavNmAsb5EoJ0C1B96HRmFqtJDSqjrh6SOQ==
"use strict";
const TITLE = "LetzteChance.Org - Encypt DeCrypter Login v .1 .01a";
const gkey = "LetzteChance.Org-Encypt-DeCrypter-Login_v_.1.01a";
$("#password").val(gkey); //remove this P-)
const STRING_NOT_FOUND = "string is empty ?";
const WRONGPWD = "wrong password";
var eindex = [
    "U2FsdGVkX1/L9kgsXThvXpggfZyS+OxLj/V4895WzmYJ+WFcV7ptavNmAsb5EoJ0C1B96HRmFqtJDSqjrh6SOQ==",
    "U2FsdGVkX1/L9kgsXThvXpggfZyS+OxLj/V4895WzmYJ+WFcV7ptavNmAsb5EoJ0C1B96HRmFqtJDSqjrh6SOQ=="
];

var dindex = [
    "U2FsdGVkX19mLcj2SiR0BYaoRwOXiB4M9JOqAglfLqKA2jkok0j19PN5v2EdKbjqvMRPY52A1LbFsJ5o5LdpNo0EczpnPOnf53AL1MHTm+k/xahu1EH4EUCWZkr8fz0m"
];

function Decrypt(pwd, inputText) {
    try {
        if (inputText.toString().length > 0) {
            var dec = CryptoJS.AES.decrypt(inputText.toString(), pwd);
            return dec.toString(CryptoJS.enc.Utf8);
            // $("#decrypt").val(dec.toString(CryptoJS.enc.Utf8));
        } else {
            alert(STRING_NOT_FOUND);
        }
    } catch (error) {
        console.error(error);
    }
};

function Encrypt(pwd, inputText) {
    try {
        if (inputText.toString().length > 0) {
            var enc = CryptoJS.AES.encrypt(inputText, pwd);
            return enc.toString();
        } else {
            alert(STRING_NOT_FOUND);
        }
    } catch (error) {
        console.error(error);
    }
};

function EncryptBase64() {
    var inputText = $("#decrypt").html();
    var wordArray = CryptoJS.enc.Utf8.parse(inputText);
    var base64 = CryptoJS.AES.decrypt.stringify(wordArray);
    console.log('encrypted:', base64);
    $("#encrypt").html(inputText);
};

function loadConfig(pwd, url) {
    var result = "";
    $.getJSON("data/data.json", function(data) {
        var json = JSON.parse(JSON.stringify(data));
        // console.log(JSON.stringify(data[0]));
        eindex = data;
        // // }).appendTo("#out");
    });

}

function loadConfigKV(pwd, url) {
    var result = "";
    $.getJSON("data/config.json", function(data) {
        var items = [];
        $.each(data, function(key, val) {
            // alert(val);
            items.push("<li id='" + key + "'>" + val + "</li>");
        });
        result = $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        });
        $("#out").val(JSON.stringify(result));
    });

}

function ajaxPage(pwd, url) {
    $.ajax({
        url: url,
        dataType: "html",
        success: function(data) {
            data = Decrypt(pwd, data);
            if (data == '<empty string>') {
                loadErrorPage();
            } else {
                $("#out").html(data);
                $("#outcnt").val(data);
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            loadErrorPage();
        }
    });
};

function loadErrorPage() {
    alert(WRONGPWD);
    $("#out").val(WRONGPWD);
    $("#outcnt").html(WRONGPWD + " Error:String is empty");
    $("#password").attr("placeholder", WRONGPWD);
    $("#password").val("");
}

function loadPage(pwd, url) {
    var hash = Decrypt(pwd, url);
    var url = hash;
    console.log(url);
    $("#out").val(url);
    ajaxPage(pwd, url);
}
$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}
$(document).ready(function() {
    console.log("app ready!");
    $("title").html(TITLE);
    $("#decryptedurl").val(eindex[0]);
    var pwd = $.urlParam('pwd');
    var url = $.urlParam('url');
    if (pwd !== undefined && pwd !== null) $("#password").val(pwd);
    if (url !== undefined && url !== null) $('#decryptedurl').val(url);
    console.log(pwd + "" + url);
    pwd = $("#password").val();
    url = $('#decryptedurl').val();

    dindex.forEach(function(s, i, o) {
        var v = CryptoJS.AES.decrypt(s.toString(), pwd).toString(CryptoJS.enc.Utf8);
        $("#out").append(v);
        $("#out").append("<br/>");
        $("#outcnt").append(v);
    });
    $("#loginbutton").on("click", function() {
        loadPage($("#password").val(), url);
    });
    $("#password").keypress(function(e) {
        if (e.which == 13) {

            loadPage(pwd);
        }
    });
    $("#password").focus();
    loadConfig();
    loadConfigKV();

});