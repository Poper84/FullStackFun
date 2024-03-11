namespace APIFun.Models
{
    public class EFBowlerRepository : IBowlingRepository
    {
        private BowlingLeagueContext _BowlingLeagueContext;
        public EFBowlerRepository(BowlingLeagueContext temp) { 
            _BowlingLeagueContext = temp;
        }
        IEnumerable<Bowler> IBowlingRepository.Bowlers => _BowlingLeagueContext.Bowlers;
    }
}
