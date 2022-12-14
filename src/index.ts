import { createAddon, runCli } from "@mediahubmx/sdk";
import {
  catalogHandler,
  itemHandler,
  resolveHandler,
  sourceHandler,
} from "./handlers";

export const zdfMediathekAddon = createAddon({
  id: "zdf-mediathek",
  name: "ZDF Mediathek",
  version: "0.0.3",
  icon: "https://www.zdf.de/static/img/appicons/favicon-144.png",
  itemTypes: ["movie", "series"],
  catalogs: [
    {
      id: "categories",
      name: "ZDF",
      search: { enabled: true },
      options: {
        shape: "landscape",
        displayName: true,
      },
    },
  ],
  dashboards: [
    {
      id: "zdf-startseite-110",
      name: "ZDF Mediathek",
      config: { showOnHomescreen: true },
    },
    {
      id: "meist-gesehen-100",
      name: "ZDF: Meist gesehen",
      config: { showOnHomescreen: true },
    },
    {
      id: "categories",
      name: "ZDF: Kategorien",
    },
    {
      id: "recently-added",
      name: "ZDF: Kürzlich hinzugefügt",
    },
  ],
});

zdfMediathekAddon.registerActionHandler("catalog", catalogHandler);

zdfMediathekAddon.registerActionHandler("item", itemHandler);

zdfMediathekAddon.registerActionHandler("source", sourceHandler);

zdfMediathekAddon.registerActionHandler("resolve", resolveHandler);

runCli([zdfMediathekAddon], {
  singleMode: true,
});
