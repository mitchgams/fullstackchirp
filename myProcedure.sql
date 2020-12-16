drop procedure spUserMentions;

DELIMITER //
CREATE procedure spUserMentions
(in uid int)
begin
	select  c.userid as userid,
    m.chirpid as chirpid,
    c.content as content,
    u.name as username,
    c._created as date
    from mentions m
    join chirps c on m.chirpid = c.id
    join users u on c.userid = u.id
    where m.userid = uid ORDER by c._created DESC;
    end //
    delimiter ;