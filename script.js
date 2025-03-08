document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "es": {
            "title": "Política de Privacidad",
            "last_update": "Última actualización:",
            "description": "Esta política de privacidad describe cómo [Nombre de la App] recopila, usa y protege su información cuando usa nuestra aplicación.",
            "section_1": "1. Información que Recopilamos",
            "section_1_text": "Podemos recopilar los siguientes tipos de información cuando usa nuestra aplicación:",
            "section_2": "2. Cómo Usamos su Información",
            "section_2_text": "La información recopilada se utiliza para:",
            "section_3": "3. Compartición de Datos",
            "section_3_text": "No compartimos su información personal con terceros, excepto en los siguientes casos:",
            "section_4": "4. Seguridad de los Datos",
            "section_4_text": "Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra accesos no autorizados, alteraciones y pérdida.",
            "section_5": "5. Derechos del Usuario",
            "section_5_text": "Usted tiene derecho a:",
            "section_6": "6. Permisos Solicitados",
            "section_6_text": "Nuestra aplicación puede solicitar permisos para acceder a:",
            "section_7": "7. Cambios en esta Política",
            "section_7_text": "Podemos actualizar esta política de privacidad en cualquier momento.",
            "section_8": "8. Contacto",
            "contact_text": "Si tiene preguntas sobre esta política de privacidad, puede contactarnos en:"
        },
        "en": {
            "title": "Privacy Policy",
            "last_update": "Last updated:",
            "description": "This privacy policy describes how [App Name] collects, uses, and protects your information when using our application.",
            "section_1": "1. Information We Collect",
            "section_1_text": "We may collect the following types of information when you use our application:",
            "section_2": "2. How We Use Your Information",
            "section_2_text": "The collected information is used to:",
            "section_3": "3. Data Sharing",
            "section_3_text": "We do not share your personal information with third parties except in the following cases:",
            "section_4": "4. Data Security",
            "section_4_text": "We implement security measures to protect your data from unauthorized access, modification, and loss.",
            "section_5": "5. User Rights",
            "section_5_text": "You have the right to:",
            "section_6": "6. Requested Permissions",
            "section_6_text": "Our application may request permissions to access:",
            "section_7": "7. Changes to this Policy",
            "section_7_text": "We may update this privacy policy at any time.",
            "section_8": "8. Contact",
            "contact_text": "If you have any questions about this privacy policy, you can contact us at:"
        },
        "fr": {
            "title": "Politique de confidentialité",
            "last_update": "Dernière mise à jour :",
            "description": "Cette politique de confidentialité décrit comment [Nom de l'App] collecte, utilise et protège vos informations lors de l'utilisation de notre application.",
            "section_1": "1. Informations que nous collectons",
            "section_1_text": "Nous pouvons collecter les types d'informations suivants lorsque vous utilisez notre application :",
            "section_2": "2. Comment nous utilisons vos informations",
            "section_2_text": "Les informations collectées sont utilisées pour :",
            "section_3": "3. Partage des données",
            "section_3_text": "Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :",
            "section_4": "4. Sécurité des données",
            "section_4_text": "Nous mettons en œuvre des mesures de sécurité pour protéger vos données contre tout accès non autorisé, modification et perte.",
            "section_5": "5. Droits de l'utilisateur",
            "section_5_text": "Vous avez le droit de :",
            "section_6": "6. Autorisations demandées",
            "section_6_text": "Notre application peut demander des autorisations pour accéder à :",
            "section_7": "7. Modifications de cette politique",
            "section_7_text": "Nous pouvons mettre à jour cette politique de confidentialité à tout moment.",
            "section_8": "8. Contact",
            "contact_text": "Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à :"
        },
        "pt": {
            "title": "Política de Privacidade",
            "last_update": "Última atualização:",
            "description": "Esta política de privacidade descreve como [Nome do Aplicativo] coleta, usa e protege suas informações ao usar nosso aplicativo.",
            "section_1": "1. Informações que Coletamos",
            "section_1_text": "Podemos coletar os seguintes tipos de informações ao usar nosso aplicativo:",
            "section_2": "2. Como Usamos Suas Informações",
            "section_2_text": "As informações coletadas são usadas para:",
            "section_3": "3. Compartilhamento de Dados",
            "section_3_text": "Não compartilhamos suas informações pessoais com terceiros, exceto nos seguintes casos:",
            "section_4": "4. Segurança dos Dados",
            "section_4_text": "Implementamos medidas de segurança para proteger seus dados contra acessos não autorizados, alterações e perdas.",
            "section_5": "5. Direitos do Usuário",
            "section_5_text": "Você tem o direito de:",
            "section_6": "6. Permissões Solicitadas",
            "section_6_text": "Nosso aplicativo pode solicitar permissões para acessar:",
            "section_7": "7. Alterações nesta Política",
            "section_7_text": "Podemos atualizar esta política de privacidade a qualquer momento.",
            "section_8": "8. Contato",
            "contact_text": "Se você tiver dúvidas sobre esta política de privacidade, pode nos contatar em:"
        },
        "de": {
            "title": "Datenschutzrichtlinie",
            "last_update": "Letzte Aktualisierung:",
            "description": "Diese Datenschutzrichtlinie beschreibt, wie [App-Name] Ihre Informationen sammelt, verwendet und schützt, wenn Sie unsere Anwendung nutzen.",
            "section_1": "1. Welche Informationen wir sammeln",
            "section_1_text": "Wir können die folgenden Arten von Informationen sammeln, wenn Sie unsere Anwendung nutzen:",
            "section_2": "2. Wie wir Ihre Informationen verwenden",
            "section_2_text": "Die gesammelten Informationen werden verwendet, um:",
            "section_3": "3. Datenweitergabe",
            "section_3_text": "Wir geben Ihre persönlichen Daten nicht an Dritte weiter, außer in den folgenden Fällen:",
            "section_4": "4. Datensicherheit",
            "section_4_text": "Wir setzen Sicherheitsmaßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Änderungen und Verlust zu schützen.",
            "section_5": "5. Benutzerrechte",
            "section_5_text": "Sie haben das Recht auf:",
            "section_6": "6. Angeforderte Berechtigungen",
            "section_6_text": "Unsere Anwendung kann Berechtigungen für den Zugriff auf folgende Informationen anfordern:",
            "section_7": "7. Änderungen dieser Richtlinie",
            "section_7_text": "Wir können diese Datenschutzrichtlinie jederzeit aktualisieren.",
            "section_8": "8. Kontakt",
            "contact_text": "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, können Sie uns unter folgender Adresse kontaktieren:"
        }
    };

    const userLang = navigator.language.substring(0, 2);
    const lang = translations[userLang] ? userLang : "en";

    function translatePage() {
        document.querySelector(".policy-title").innerText = translations[lang]["title"];
        document.querySelector(".policy-text").innerText = translations[lang]["last_update"];
        document.querySelector(".policy-text + p").innerText = translations[lang]["description"];
    }

    translatePage();
});
