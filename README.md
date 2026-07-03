# Kompass OS

Kompass OS ist die technische und methodische Ebene für Projekt Kompass.

Ziel ist nicht, einzelne Produktideen lose zu sammeln, sondern ein dauerhaft nutzbares Wissens-, Research- und Entscheidungsmodell aufzubauen.

## Rolle dieses Repositorys

Dieses Repository versioniert die Logik hinter Kompass OS:

- Architektur
- Datenmodell
- Objekt-IDs
- Bewertungsregeln
- Research-Workflows
- Prompts
- Validierungsprozesse
- spätere Skripte und Automatisierungen

Google Drive bleibt die operative Wissens- und Arbeitsablage. GitHub ist die versionierte technische Ebene.

## Aktueller Stand

- Drive-Struktur vorhanden
- Projektakte vorhanden
- Masterdatenbank vorhanden
- erster Business Case: Camping & Wohnmobil / Ordnungssysteme
- Repository initialisiert am 2026-07-03

## Leitprinzipien

1. ChatGPT ist nicht das Zentrum, sondern ein Benutzer des Systems.
2. Jede Information bekommt einen eindeutigen Platz.
3. Fakten, Beobachtungen, Hypothesen und Entscheidungen werden getrennt.
4. Jede verworfene Idee bleibt dokumentiert.
5. Landingpages validieren vor Shop-Investitionen.
6. Amazon ist Vertriebskanal, nicht Geschäftsmodell.
7. Das System muss später auf andere Märkte, Produkte und Projekte übertragbar sein.

## Kernbereiche

```text
kompass-os/
├── architecture/       # Zielbild, Systemdesign, Prinzipien
├── data-model/         # Entitäten, Beziehungen, ID-System, Statusmodell
├── workflows/          # Standardprozesse für Research, Validierung, Entscheidungen
├── prompts/            # Wiederverwendbare Arbeitsanweisungen
├── scoring/            # Bewertungslogik und Scoremodelle
├── schemas/            # Maschinenlesbare Strukturen
├── scripts/            # spätere Automatisierungen
└── docs/               # ergänzende Dokumentation
```

## Erste operative Priorität

Der Business Case **Camping Ordnungssysteme** wird als Pilot verwendet, um das gesamte Modell zu testen.

Pilotfragen:

- Welche Zielgruppen gibt es im Markt Camping & Wohnmobil?
- Welche Probleme sind häufig, schmerzhaft und kaufrelevant?
- Welche Produktfamilien können mehrere Probleme systematisch lösen?
- Welche Produkte sind differenzierbar genug für eine eigene Marke?
- Welche Landingpages validieren Nachfrage mit minimalem Aufwand?
