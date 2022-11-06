namespace PortofolioPerformanceAPI.Models
{
    public class SharesModel
    {
        public string Date { get; set; }
        public float Open { get; set; }
        public float High { get; set; }
        public float Low { get; set; }
        public float Close { get; set; }
        public float AdjClose { get; set; }
        public int Volume { get; set; }
        public SharesModel(string date, float open, float high, float low, float close, float adjClose, int volume)
        {
            Date = date;
            Open = open;
            High = high;
            Low = low;
            Close = close;
            AdjClose = adjClose;
            Volume = volume;
        }
    }
}
