using PortofolioPerformanceAPI.Models;
using System.Reflection.PortableExecutable;
using System;
using System.Net.Http;
using System.Collections.Generic;
using System.IO;
using System.Net;

namespace PortofolioPerformanceAPI.Services
{
    public class SharesService
    {
        public const string baseURL = "https://query1.finance.yahoo.com/v7/finance/download/";
        public static List<SharesModel> getData(string ticker, string startDate, string endDate)
        {
            //yahoo API has a weird date format: 3rd Oct 2022 is 1664755200
            //added hardcoded values for start date and end date (end date set in the future)
            //so it always gets data until last day
            var fullURL = baseURL + ticker + "?period1=" + 1664755200 + "&period2=" + 1670544000 + "&interval=1d&events=history&includeAdjustedClose=true";

            List<SharesModel> sharesData = new List<SharesModel>();
            string[] data = null;
            WebClient wc = new WebClient();

            var response = wc.DownloadString(fullURL);

            data = response.Split(new[] { '\n' });

            //skip first line as it contains headers
            for(int i = 1; i< data.Length; i++)
            {
                var values = data[i].Split(',');
                SharesModel shareData = new SharesModel(values[0], float.Parse(values[1]), float.Parse(values[2]), float.Parse(values[3]), float.Parse(values[4]), float.Parse(values[5]), int.Parse(values[6]));
                sharesData.Add(shareData);
            }
            return sharesData;
        }
    }
}
