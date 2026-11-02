# Survie Viking — modpack du serveur

Modpack Forge **1.20.1** du serveur `pterodactyl.infraproxmox.org:25568`.
Les mods se synchronisent **tout seuls à chaque lancement du jeu** grâce à [packwiz](https://packwiz.infra.link/) et Prism Launcher.

Lien du pack (à coller dans Prism) :

```
https://raw.githubusercontent.com/Hugo-Tessier/survie-viking/main/pack.toml
```

---

## Pour les joueurs : installation (une seule fois, ~10 min)

1. **Installer Prism Launcher** : <https://prismlauncher.org/download> puis se connecter avec son compte Microsoft (*Comptes → Ajouter Microsoft*).
2. **Créer l'instance** : *Ajouter une instance* → **Vanilla 1.20.1** → nom « Survie Viking » → OK.
3. **Ajouter Forge** : clic droit sur l'instance → *Modifier* → *Version* → **Installer Forge** → choisir **47.4.28**.
4. **Mémoire** : dans *Modifier* → *Paramètres* → cocher *Mémoire* → **Maximum 8192 Mo**.
5. **Télécharger le synchroniseur** : [packwiz-installer-bootstrap.jar](https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest) et le placer dans le dossier de l'instance :
   clic droit sur l'instance → *Dossier* → ouvrir **`minecraft`** (ou `.minecraft`) → y coller le `.jar`.
6. **Brancher la synchro** : *Modifier* → *Paramètres* → onglet **Commandes personnalisées** → cocher la case, puis dans **Commande de pré-lancement** coller :

   ```
   "$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://raw.githubusercontent.com/Hugo-Tessier/survie-viking/main/pack.toml
   ```

7. **Lancer** l'instance. Une fenêtre télécharge tous les mods, puis le jeu démarre.
   Multijoueur → Ajouter un serveur → `pterodactyl.infraproxmox.org:25568`.

Si une fenêtre demande de **télécharger un mod à la main** (certains auteurs CurseForge l'imposent), clique sur le lien proposé, télécharge le fichier et suis les indications de la fenêtre. Si ça bloque, préviens Hugo.

### Mods conseillés côté joueur (optionnels, à ajouter soi-même)

Ils ne sont pas obligatoires pour se connecter. Dans Prism : *Modifier* → *Mods* → *Télécharger des mods*.

- Xaero's Minimap + Xaero's World Map
- Embeddium (+ Sodium/Embeddium Dynamic Lights)
- Oculus (shaders)
- Ok Zoomer (Forge)
- ToroHealth Damage Indicators (Unofficial)

---

## Pour Hugo : ajouter / retirer un mod

Dans le dossier du dépôt, avec `packwiz.exe` :

```
.\packwiz.exe curseforge add nom-ou-lien-du-mod
.\packwiz.exe remove nom-du-mod
.\packwiz.exe refresh
```

Puis *Commit* + *Push* dans GitHub Desktop. Tout le monde l'a au prochain lancement.
Penser aussi à mettre le `.jar` sur le serveur (dossier `mods/` dans Pterodactyl).

Mod **client uniquement** (visuel, minimap…) : ajouter `--side client` n'est pas possible à l'ajout ; ouvrir le fichier `mods/<mod>.pw.toml` et mettre `side = "client"`, puis `refresh`.
