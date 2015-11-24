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
    public class ForumController : ApiController
    {
        private RYDesignContext db = new RYDesignContext();

        // GET: api/Forum
        public IQueryable<Forum> GetForum()
        {
            return db.Forum;
        }

        // GET: api/Forum/5
        [ResponseType(typeof(Forum))]
        public IHttpActionResult GetForum(int id)
        {
            Forum forum = db.Forum.Find(id);
            if (forum == null)
            {
                return NotFound();
            }

            return Ok(forum);
        }

        // PUT: api/Forum/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutForum(int id, Forum forum)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != forum.ID)
            {
                return BadRequest();
            }

            db.Entry(forum).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForumExists(id))
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

        // POST: api/Forum
        [ResponseType(typeof(Forum))]
        public IHttpActionResult PostForum(Forum forum)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Forum.Add(forum);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = forum.ID }, forum);
        }

        // DELETE: api/Forum/5
        [ResponseType(typeof(Forum))]
        public IHttpActionResult DeleteForum(int id)
        {
            Forum forum = db.Forum.Find(id);
            if (forum == null)
            {
                return NotFound();
            }

            db.Forum.Remove(forum);
            db.SaveChanges();

            return Ok(forum);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ForumExists(int id)
        {
            return db.Forum.Count(e => e.ID == id) > 0;
        }
    }
}