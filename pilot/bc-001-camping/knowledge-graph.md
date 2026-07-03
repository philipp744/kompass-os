# BC-001 Knowledge Graph – Camping Ordnungssysteme

## Zweck

Dieses Dokument modelliert den Pilot-Business-Case BC-001 als verknüpftes System aus Markt, Zielgruppen, Situationen, Problemen, Produktfamilien und Produkten.

## Markt

- M-001: Camping und Wohnmobil

## Business Case

- BC-001: Camping Ordnungssysteme

Kernthese: Im Camper entsteht auf engem Raum ein dauerhafter Ordnungsdruck. Einzelprodukte sind schwächer als ein modulares System mit klaren Einsatzorten.

## Zielgruppen

| ID | Zielgruppe | Beschreibung | Priorität |
|---|---|---|---|
| ZG-001 | Kastenwagen-Besitzer | Begrenzter Raum, häufig individuelle Umbauten | A |
| ZG-002 | VW-California-Nutzer | Kompakter Camper, hoher Bedarf an platzsparenden Lösungen | A |
| ZG-003 | Wohnmobil-Paare | Komfortorientiert, längere Reisen, Ordnung wichtig | A |
| ZG-004 | Familien mit Camper | Mehr Personen, mehr Kleinteile, hoher Stauraumdruck | B |
| ZG-005 | Vanlife-Einsteiger | Suchen Orientierung, Checklisten und einfache Systeme | B |
| ZG-006 | Wochenend-Camper | Kurztrips, schneller Auf- und Abbau relevant | B |

## Situationen

| ID | Situation | Beschreibung |
|---|---|---|
| SIT-001 | Packen vor der Reise | Dinge werden vorbereitet, sortiert und verstaut |
| SIT-002 | Ankunft am Stellplatz | Kabel, Dokumente, Kleinteile und Zubehör werden gebraucht |
| SIT-003 | Alltag im Camper | Wiederkehrende Nutzung auf engem Raum |
| SIT-004 | Kochen und Wohnen | Kleinteile, Tücher, Gewürze, Geräte brauchen feste Plätze |
| SIT-005 | Laden und Strom | Kabel, Adapter, Powerbanks und Ladegeräte sammeln sich |
| SIT-006 | Abfahrt und Aufräumen | Alles muss schnell gesichert und verstaut werden |
| SIT-007 | Fahrzeugkontrolle | Papiere, Checklisten, Platzinfos und Dokumente müssen griffbereit sein |

## Probleme

| ID | Problem | Situation | Priorität | Kommentar |
|---|---|---|---|---|
| PRO-001 | Chaos auf engem Raum | SIT-003 | A | Grundproblem des Business Case |
| PRO-002 | Kein fester Ort für Ladezubehör | SIT-005 | A | Starker Kandidat für Kabelstation |
| PRO-003 | Dokumente und Checklisten sind verstreut | SIT-007 | A | Starker Kandidat für Dokumentenstation |
| PRO-004 | Schrank- und Türflächen werden nicht genutzt | SIT-003 | A | Kandidat für Schranktür-Organizer |
| PRO-005 | Lose Kleinteile verrutschen während der Fahrt | SIT-006 | A | Kandidat für Netze und Taschen |
| PRO-006 | Unterschiedliche Campertypen brauchen andere Lösungen | SIT-003 | A | Segmentierung nötig |
| PRO-007 | Einzelprodukte ergeben kein System | SIT-003 | A | Marken- und Bundle-Chance |
| PRO-008 | Packen und Abfahrt kosten zu viel Zeit | SIT-001/SIT-006 | B | Workflow-Content möglich |

## Produktfamilien

| ID | Produktfamilie | Löst primär | Priorität |
|---|---|---|---|
| PF-001 | Kabelmanagement | PRO-002 | A |
| PF-002 | Dokumentenorganisation | PRO-003 | A |
| PF-003 | Stauraum-Organizer | PRO-001, PRO-004, PRO-005 | A |
| PF-004 | Reisevorbereitung und Checklisten | PRO-008 | B |
| PF-005 | Modularer System-Bundle-Ansatz | PRO-007 | A |

## Produkt-Mapping

| Produkt-ID | Produkt | Produktfamilie | Löst Probleme | Status | Score |
|---|---|---|---|---|---:|
| PRD-001 | Organizer Schranktür | PF-003 | PRO-001, PRO-004 | Priorität A | 91 |
| PRD-002 | Netz-Organizer | PF-003 | PRO-001, PRO-005 | Priorität A | 90 |
| PRD-003 | Kabeltasche | PF-001 | PRO-002 | Priorität A | 88 |
| PRD-004 | Dokumentenmappe | PF-002 | PRO-003 | Priorität B | 86 |
| PRD-005 | Falteimer Premium | PF-005 | PRO-007 | Priorität B | 84 |
| PRD-006 | Magnethaken | PF-003 | PRO-005 | Verworfen | 48 |
| PRD-007 | Magnetgläser | PF-003 | PRO-005 | Verworfen | 42 |
| PRD-008 | Kabelstation | PF-001 | PRO-002, PRO-007 | Priorität A | 93 |
| PRD-009 | Dokumentenstation | PF-002 | PRO-003, PRO-007 | Priorität A | 90 |
| PRD-010 | Universal-Organizer | PF-003 | PRO-001 | Verworfen | 35 |

## Erste Interpretation

Der stärkste Pfad im Knowledge Graph ist:

M-001 → BC-001 → ZG-001/ZG-002/ZG-003 → SIT-005/SIT-007/SIT-003 → PRO-002/PRO-003/PRO-004 → PF-001/PF-002/PF-003 → PRD-008/PRD-009/PRD-001.

Damit ergeben sich drei primäre Validierungsrichtungen:

1. Kabelstation
2. Dokumentenstation
3. Schranktür-Organizer

## Offene Fragen

- Welche Zielgruppe reagiert am stärksten auf Ordnungssysteme?
- Ist Kabelmanagement oder Dokumentenorganisation der bessere erste Landingpage-Test?
- Welche Campertypen brauchen unterschiedliche Produktvarianten?
- Wie stark ist die Zahlungsbereitschaft für ein hochwertiges Ordnungssystem statt Einzelprodukt?
