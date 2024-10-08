import { GetUser } from "../actions/requests";
import { getToken } from "../lib/session"
import ProfileComponent from "../ui/profile/profile_component";

export default async function PageProfile() {
    const token = await getToken();
    const AllUser = await GetUser();
    const user = AllUser.find(user => user.id === token.userId);

    return (<ProfileComponent user={user} />)
}