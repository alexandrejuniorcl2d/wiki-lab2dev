---
title: "Automação SAP GUI RPA"
description: "Automação nativa do SAP GUI e de apps Windows no SAP RPA: scripting habilitado (RZ11 e cliente), gravador vs captura manual por ID, gestão de sessões, navegação por transação e teclas, grids como coleções, validação pela status bar, UIAutomation, OC…"
tags: ["glossario","sap-rpa"]
---
**Também conhecido como:** `SAP GUI Scripting API` · `sapgui/user_scripting` · `RZ11 scripting` · `Enable scripting` · `Recorder RPA` · `Gravador SAP GUI` · `Get Status Bar` · `Press Key RPA` · `Win32 API RPA` · `AutomationID` · `Find Image` · `Extract Data Online OCR` · `File System SDK RPA` · `saplogon.exe`

> **Definição**
> Automação nativa do SAP GUI e de apps Windows no SAP RPA: scripting habilitado (RZ11 e cliente), gravador vs captura manual por ID, gestão de sessões, navegação por transação e teclas, grids como coleções, validação pela status bar, UIAutomation, OCR/imagem, arquivos e pop-ups.
{.is-info}

**Tecnologias de captura:**
| Tecnologia | Uso | Identificação |
|---|---|---|
| **SAP GUI Scripting API** | Sempre para SAP GUI — mais rápida e estável, independe da aparência | IDs longos `/app/con[0]/ses[0]/wnd[0]/usr/ctxtVBAK-VBELN` |
| **UIAutomation** | Apps Windows modernos (Calculadora, Bloco de Notas, terceiros) | `AutomationID`, `Name`, `ClassName` |
| **Win32 API** | Apps legados sem UIAutomation | `hWnd` |

**Habilitar scripting (uma vez):** servidor — `RZ11`, parâmetro **`sapgui/user_scripting = TRUE`** (Basis); cliente — SAP Logon > Options > Accessibility & Scripting > Scripting > **Enable scripting** e **desmarcar** "Notify when a script attaches…" e "Notify when a script opens a connection…" (senão pop-ups travam o robô).

**Gravador × captura manual:** o *Recorder* (Record → executar VA01 → Stop) gera telas, elementos e fluxo — ótimo para protótipo, mas seletores frágeis e lógica linear. Profissional: *Tree View* → botão direito > **Declare Element** → priorizar o critério **ID** e desmarcar Name/Text.

**Sessões:** verificar se `saplogon.exe` roda → *SAP Logon* (start) → *Connection* (attach) → *Session* (attach a existente, ex.: título "SAP Easy Access", ou criar nova com logon) — sem atrapalhar um usuário com SAP aberto (*Application Instance Management*).

**Navegação:** *Set* na barra de comandos com `/nVA01` (mesma janela) ou `/oSE16` (nova) · **Press Key**: Enter, F8 (executar), F11/Ctrl+S (salvar).

**Grids/tabelas:** capture uma célula → generalize (`Id contains 'cell[1]'`) → *Is a collection* → *For Each* com Get/Set; para performance, script `return $.[app].screens.[screen].elements.[element].getItems();`.

**Validar sucesso:** após salvar, **Get Status Bar** retorna tipo (S sucesso, E erro, W aviso), código e texto → *If* tipo = 'S' → logar documento; senão tratar exceção.

**Plano B — imagem e OCR** (Citrix/VDI, apps sem acessibilidade): *Find Image*/*Click Image* (template matching) e *Extract Data (Online OCR)* via Document Information Extraction — último recurso (lento e sensível a resolução, tema e fontes).

**Arquivos (File System SDK):** Create/Delete/Exists Folder, List Files, Copy/Move/Delete File, Read/Write File (ex.: ler `materiais.txt`, processar no SAP, mover para `\Processados`).

**Pop-ups modais:** event trigger no *Screen Loaded* do pop-up, verificação explícita *If Element Exists* após ações arriscadas, ou Try/Catch com retry.

**Exercício — ordem de venda VA01:** conectar/criar sessão → `/nVA01` → tipo OR, org. vendas 1000, canal 10, setor 00, Enter → emissor 100112, pedido `ROBO-TESTE-01`, material TG11 qtd 5 → F11 → *Get Status Bar* → If 'S' logar número, senão logar erro → fechar sessão.

## 🔗 Relacionados
- [Cloud Studio RPA](/glossario/cloud-studio-rpa)
- [SAP GUI](/glossario/sap-gui)
- [Integração RPA com S4HANA](/glossario/integracao-rpa-com-s4hana)
- [Excel SDK RPA](/glossario/excel-sdk-rpa)

## 📚 Fontes
- Apostila - SAP RPA

---
🧭 [SAP RPA e Automação](/glossario/temas/sap-rpa-e-automacao) · [Glossário SAP A-Z](/glossario/a-z) · [Glossário SAP](/glossario)
