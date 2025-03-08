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
        }
    };

    // Detectar el idioma del usuario
    const userLang = navigator.language.substring(0, 2); // Obtiene los dos primeros caracteres del idioma
    const lang = translations[userLang] ? userLang : "en"; // Si no está en la lista, usa inglés como predeterminado

    // Función para aplicar la traducción
    function translatePage() {
        const textElements = {
            ".policy-title": "title",
            ".policy-text:first-of-type": "last_update",
            ".policy-text:nth-of-type(2)": "description",
            ".policy-section-title:nth-of-type(1)": "section_1",
            ".policy-text:nth-of-type(3)": "section_1_text",
            ".policy-section-title:nth-of-type(2)": "section_2",
            ".policy-text:nth-of-type(4)": "section_2_text",
            ".policy-section-title:nth-of-type(3)": "section_3",
            ".policy-text:nth-of-type(5)": "section_3_text",
            ".policy-section-title:nth-of-type(4)": "section_4",
            ".policy-text:nth-of-type(6)": "section_4_text",
            ".policy-section-title:nth-of-type(5)": "section_5",
            ".policy-text:nth-of-type(7)": "section_5_text",
            ".policy-section-title:nth-of-type(6)": "section_6",
            ".policy-text:nth-of-type(8)": "section_6_text",
            ".policy-section-title:nth-of-type(7)": "section_7",
            ".policy-text:nth-of-type(9)": "section_7_text",
            ".policy-section-title:nth-of-type(8)": "section_8",
            ".policy-text:nth-of-type(10)": "contact_text"
        };

        for (const selector in textElements) {
            const element = document.querySelector(selector);
            if (element) {
                element.innerText = translations[lang][textElements[selector]];
            }
        }
    }

    translatePage();
});
