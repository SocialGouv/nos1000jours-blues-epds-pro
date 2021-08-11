import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://backoffice-preprod-les1000jours.dev.fabrique.social.gouv.fr/graphql",
    cache: new InMemoryCache(),
});

export default client;