import { useEffect, useState } from "react";
import { bowlers } from "../types/bowlers";
//This function gets the bowling list put into an array from the DB
function BowlerList() {
    const [bowlingdata, setbowlingdata] = useState<bowlers[]>([]);

    useEffect(() => {
        const FetchBowlerData = async () => {
            const rsp = await fetch('http://localhost:5195/bowling');
            const f = await rsp.json();
            setbowlingdata(f);
        };
        FetchBowlerData();
    }, []);

    // Function to get team name based on team ID
    const getTeamName = (teamId: number) => {
        switch (teamId) {
            case 1:
                return 'Marlins';
            case 2:
                return 'Sharks';
            default:
                return 'Unknown Team'; // Optional: Handle other team IDs or default case
        }
    };

    // Filter out only the bowlers from teams with ID 1 and 2
    const filteredBowlers = bowlingdata.filter((bowler) => bowler.teamId === 1 || bowler.teamId === 2);

    return (
        <>
            <div className="row">
                <h4 className="center">Bowlers In The League</h4>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Bowler First Name</th>
                        <th>Bowler Middle Name</th>
                        <th>Bowler Last Name</th>
                        <th>Team</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBowlers.map((f) =>
                        <tr key={f.bowlerId}>
                            <td>{f.bowlerFirstName}</td>
                            <td>{f.bowlerMiddleInit}</td>
                            <td>{f.bowlerLastName}</td>
                            <td>{getTeamName(f.teamId)}</td> {/* Use the getTeamName function here */}
                            <td>{f.bowlerAddress}</td>
                            <td>{f.bowlerCity}</td>
                            <td>{f.bowlerState}</td>
                            <td>{f.bowlerZip}</td>
                            <td>{f.bowlerPhoneNumber}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default BowlerList;
