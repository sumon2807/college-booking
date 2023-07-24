import { useEffect, useState } from "react";

const useCollegeData = () => {
    const [collegeDatas, setCollegeDatas] = useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(() => {
        fetch('http://localhost:3000/colleges')
            .then(res => res.json())
            .then(data => {
                setCollegeDatas(data);
                setLoading(false);
            });
    }, [])
    return [collegeDatas, loading]
}
export default useCollegeData;