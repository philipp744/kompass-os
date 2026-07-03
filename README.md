# Kompass OS

Kompass OS ist die technische und methodische Ebene fuer Projekt Kompass.

Ziel ist nicht, einzelne Produktideen lose zu sammeln, sondern ein dauerhaft nutzbares Wissens-, Research- und Entscheidungsmodell aufzubauen.

## Schneller Einstieg

Wenn du nur wissen willst, wo das Projekt steht, lies zuerst:

1. `PROJECT_STATUS.md`
2. `docs/user-guide.md`
3. `docs/navigation.md`
4. `docs/glossary.md`

## Rolle dieses Repositorys

Dieses Repository versioniert die Logik hinter Kompass OS:

- Architektur
- Datenmodell
- Objekt-IDs
- Bewertungsregeln
- Research-Workflows
- Prompts
- Validierungsprozesse
- Prototypen
- spaetere Skripte und Automatisierungen

Google Drive bleibt die operative Wissens- und Arbeitsablage. GitHub ist die versionierte technische Ebene.

## Aktueller Stand

- Drive-Struktur vorhanden
- Projektakte vorhanden
- Masterdatenbank vorhanden
- erster Business Case: Camping & Wohnmobil Ordnungssysteme
- LP-001 Kabelstation als statischer Prototyp vorhanden
- Repository initialisiert am 2026-07-03

## Leitprinzipien

1. ChatGPT ist nicht das Zentrum, sondern ein Benutzer des Systems.
2. Jede Information bekommt einen eindeutigen Platz.
3. Fakten, Beobachtungen, Hypothesen und Entscheidungen werden getrennt.
4. Jede verworfene Idee bleibt dokumentiert.
5. Landingpages validieren vor Shop-Investitionen.
6. Amazon ist Vertriebskanal, nicht Geschäftsmodell.
7. Das System muss spaeter auf andere Maerkte, Produkte und Projekte uebertragbar sein.

## Kernbereiche

```text
kompass-os/
├── AGENTS.md            # Arbeitsregeln fuer Agenten
├── PROJECT_STATUS.md    # aktueller Status und naechste Meilensteine
├── architecture/        # Zielbild, Systemdesign, Prinzipien
├── data-model/          # Entitaeten, Beziehungen, ID-System, Statusmodell
├── workflows/           # Standardprozesse fuer Research, Validierung, Entscheidungen
├── prompts/             # Wiederverwendbare Arbeitsanweisungen
├── scoring/             # Bewertungslogik und Scoremodelle
├── schemas/             # Maschinenlesbare Strukturen
├── pilot/               # aktive Business Cases
├── prototypes/          # technische Prototypen
├── scripts/             # spaetere Automatisierungen
└── docs/                # lesbare Orientierung und Glossar
```

## Erste operative Prioritaet

Der Business Case **Camping Ordnungssysteme** wird als Pilot verwendet, um das gesamte Modell zu testen.

Pilotfragen:

- Welche Zielgruppen gibt es im Markt Camping & Wohnmobil?
- Welche Probleme sind haeufig, schmerzhaft und kaufrelevant?
- Welche Produktfamilien koennen mehrere Probleme systematisch loesen?
- Welche Produkte sind differenzierbar genug fuer eine eigene Marke?
- Welche Landingpages validieren Nachfrage mit minimalem Aufwand?

## Aktiver Pilot

- BC-001: Camping Ordnungssysteme
- LP-001: Kabelstation
- Prototyp: `prototypes/lp-001-kabelstation/`
