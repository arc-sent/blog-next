'use client'
import { FaSearch } from "react-icons/fa";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function CreatedFormHeader() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <form>
            <FaSearch style={{ margin: '0px 15px', fontSize: "18px" }} />
            <input placeholder="Найти тему" onChange={(e) => handleSearch(e.target.value)} defaultValue={searchParams.get('query')?.toString()} />
        </form>
    )
}