import ModuleCard from "@components/ModuleCard"

type Props = {
    slice?: number
}
const ModulesList = ({slice = 0}:Props) => {

    
    let modules = [
        {
            title: "Authentification",
            desc: "Module d'authentification comprenant la gestion des utilisateurs, des rôles, des permissions et la connection avec les diferent services (google, facebook, twitter, github, etc...).",
            bg: true,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-purple-500">
                <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
            </svg>,
            color: "purple-500",
        },
        {
            title: "Paiement",
            desc: "Interface de paiement securisé permetant de gerer les paiements, les factures, les commandes, les abonnements, les remboursements, etc...",
            bg: true,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-zinc-400">
                <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
            </svg>,

            color: "null",
        },
        {
            title: "Gestion des donnes",
            desc: "Un module permetant de gérer les données de l'application, les tables, les champs, les relations, les filtres, les exports, les imports, CRUD etc...",
            bg: false,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-rose-400">
                <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
            </svg>,
            color: "rose-400",
        },
        {
            title: "Formulaire",
            desc: "Le module de Formulaire permet de créer, personnaliser et gérer des formulaires interactifs pour recueillir des informations, des retours, ou des demandes des utilisateurs. Il s'adapte à divers besoins, tels que les enquêtes, les inscriptions, les sondages, ou les formulaires de contact.",
            bg: false,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-purple-800">
                <path fill-rule="evenodd" d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" clip-rule="evenodd" />
            </svg>,
            color: "purple-800",
        },
        {
            title: "Gestion de Contenu (CMS)",
            desc: "Un module de gestion de contenu permettant de créer, éditer, publier et organiser le contenu de l'application, y compris les articles, les pages, les médias et les catégories.",
            bg: true,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-rose-400">
                <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
            </svg>,

            color: "rose-400",
        },
        {
            title: "Chat",
            desc: "Le module de Chat permet une communication en temps réel entre les utilisateurs de l'application, les clients et le support ou entre les utilisateurs eux-mêmes.",
            bg: false,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-zinc-400">
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
            </svg>,
            color: "null",
        },
        {
            title: "Notifications et Alertes",
            desc: "Ce module permet d'envoyer des notifications push, des emails ou des SMS aux utilisateurs. Il inclut la gestion des campagnes, des segments d'utilisateurs, des déclencheurs d'événements et des modèles de notifications.",
            bg: true,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-zinc-400">
                <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
            </svg>,

            color: "null",
        },
        {
            title: "SEO et Optimisation de la Performance",
            desc: "Un module qui aide à optimiser le référencement de l'application sur les moteurs de recherche (SEO) et à améliorer la performance de chargement des pages.",
            bg: true,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-rose-400">
                <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clip-rule="evenodd" />
            </svg>,
            color: "rose-400",
        },
        
        {
            title: "Statistiques et Analytique",
            desc: "Un module permettant de suivre et d'analyser les données de l'application, telles que le nombre de visites, le comportement des utilisateurs, les taux de conversion, les performances des pages, etc.",
            bg: true,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-purple-800">
                <path fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clip-rule="evenodd" />
            </svg>,
            color: "purple-800",
        },
        {
            title: "E-commerce",
            desc: "Ce module permet d'ajouter des fonctionnalités de commerce électronique à l'application, telles que la gestion des produits, des catégories, des stocks et des promotions.",
            bg: true,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-zinc-400">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>,
            color: "null",
        },
        {
            title: "Intégration et API",
            desc: "Ce module permet d'intégrer l'application avec d'autres services externes via des API. Il offre également la possibilité de créer des API personnalisées pour l'application.",
            bg: true,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-purple-500">
                <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                <path fill-rule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
            </svg>,
            color: "purple-500",
        },
        {
            title: "Personnalisation et Thématisation",
            desc: "Un module permettant aux utilisateurs de personnaliser l'interface et les fonctionnalités de l'application selon leurs préférences",
            bg: true,
            svg: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-rose-400">
                <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
            </svg>,

            color: "rose-400",
        },
        
    ]
    
    if(slice > 0) {
        modules = modules.slice(0, slice)
    } 
    
    return (
        <div class="max-w-[85rem] mx-auto">
            <div class="px-4 lg:px-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map(module => (
                    <ModuleCard title={module.title} desc={module.desc} bg={module.bg} svg={module.svg} color={module.color} square={true} />
                ))}
            </div>
        </div>
    )
}

export default ModulesList