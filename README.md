# fullstack chirper
- please take note there is no pass hashing.
- passwords are required to post/edit/delete for any specific user.
- same database structure is used that was in the lab.

THIS IS MY PROCEDURE:

drop procedure spUserMentions;

DELIMITER //
CREATE procedure spUserMentions
(in uid int)
begin
	select  c.userid as userid,
    m.chirpid as chirpid,
    c.content as content,
    u.name as name,
    c._created as date
    from mentions m
    join chirps c on m.chirpid = c.id
    join users u on c.userid = u.id
    where m.userid = uid ORDER by c._created DESC;
    end //
    delimiter ;