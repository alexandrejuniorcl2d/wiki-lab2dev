---
title: "SAP Build Work Zone"
description: "Portal da BTP (sucessor do SAP Launchpad Service) que cria sites de negócio e launchpads centrais com acesso único às apps Fiori, Build Apps e extensões, governado por catálogos, grupos e roles."
tags: ["glossario","sap-build"]
---
**Também conhecido como:** `Work Zone` · `SAP Build Work Zone Standard Edition` · `SAP Build Work Zone Advanced Edition` · `Launchpad Service` · `SAP Launchpad Service` · `Content Manager` · `Site Manager` · `Site Directory` · `Business Site`

> **Definição**
> Portal da BTP (sucessor do SAP Launchpad Service) que cria sites de negócio e launchpads centrais com acesso único às apps Fiori, Build Apps e extensões, governado por catálogos, grupos e roles.
{.is-info}

**Papel:** "inauguração" — onde a aplicação vira realidade para o usuário final numa experiência de trabalho unificada e segura. A **Standard Edition** atua como launchpad central (equivalente em nuvem do [Fiori Launchpad](/glossario/fiori-launchpad)).

**Publicar um app (Content Manager):**
1. Obter **App ID** e URL no painel *HTML5 Applications* da subconta.
2. Criar item do tipo **App** (título, subtítulo, ícone do tile); navegação com **Semantic Object** `default` e **Action** `open`.
3. Adicionar o app a um **Catalog** e a um **Group**.
4. Criar/editar um **Role** e associar o catálogo.
5. No **Site Directory**, associar o role ao site — usuários com o papel veem o tile.

**Pré-requisitos do deploy:** apps HTML5 com *Managed Application Router* na mesma subconta; `.mtar` gerado com o perfil "SAP Build Work Zone".

**Tema:** temas customizados do SAP Theme Designer podem ser definidos como padrão no Work Zone/Launchpad Service.

## 🔗 Relacionados
- [SAP Build](/glossario/sap-build)
- [Fiori Launchpad](/glossario/fiori-launchpad)
- [SAP Build Apps](/glossario/sap-build-apps)
- [SAP Build Code](/glossario/sap-build-code)

## 📚 Fontes
- Apostila - SAP Build Low e Pro Code

---
🧭 [SAP Build](/glossario/temas/sap-build) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
