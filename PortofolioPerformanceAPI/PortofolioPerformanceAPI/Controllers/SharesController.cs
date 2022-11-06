using Microsoft.AspNetCore.Mvc;
using PortofolioPerformanceAPI.Models;
using PortofolioPerformanceAPI.Services;
using System;
using System.Collections.Generic;

namespace PortofolioPerformanceAPI.Controllers
{
    [ApiController]
    public class SharesController : ControllerBase
    {
        List<SharesModel> sharesData;

        [HttpGet("getData/{ticker}/{startDate}/{endDate}")]
        public ActionResult<List<SharesModel>> GetData(string ticker, string startDate, string endDate)
        {
            try
            {
                sharesData = SharesService.getData(ticker, startDate, endDate);

                return sharesData;
            }
            catch
            {
                return NotFound();
            }
        }
    }
}