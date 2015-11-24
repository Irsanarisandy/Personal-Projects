using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using RYDesign.Models;

namespace RYDesign.Controllers
{
    public class FeedbackController : ApiController
    {
        private RYDesignContext db = new RYDesignContext();

        // GET: api/Feedback
        public IQueryable<Feedback> GetFeedback()
        {
            return db.Feedback;
        }

        // GET: api/Feedback/5
        [ResponseType(typeof(Feedback))]
        public IHttpActionResult GetFeedback(int id)
        {
            Feedback feedback = db.Feedback.Find(id);
            if (feedback == null)
            {
                return NotFound();
            }

            return Ok(feedback);
        }

        // PUT: api/Feedback/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFeedback(int id, Feedback feedback)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != feedback.FeedbackID)
            {
                return BadRequest();
            }

            db.Entry(feedback).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FeedbackExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Feedback
        [ResponseType(typeof(Feedback))]
        public IHttpActionResult PostFeedback(Feedback feedback)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Feedback.Add(feedback);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = feedback.FeedbackID }, feedback);
        }

        // DELETE: api/Feedback/5
        [ResponseType(typeof(Feedback))]
        public IHttpActionResult DeleteFeedback(int id)
        {
            Feedback feedback = db.Feedback.Find(id);
            if (feedback == null)
            {
                return NotFound();
            }

            db.Feedback.Remove(feedback);
            db.SaveChanges();

            return Ok(feedback);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FeedbackExists(int id)
        {
            return db.Feedback.Count(e => e.FeedbackID == id) > 0;
        }
    }
}