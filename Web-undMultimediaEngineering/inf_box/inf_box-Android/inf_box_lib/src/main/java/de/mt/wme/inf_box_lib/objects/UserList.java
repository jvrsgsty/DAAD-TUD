
package de.mt.wme.inf_box_lib.objects;

import org.simpleframework.xml.Default;
import org.simpleframework.xml.ElementList;

import java.util.List;

/**
 * Wrapper class for User Lists
 * 
 * @author antaug
 */
@Default
public class UserList {

    @ElementList(entry = "user", inline = true)
    private List<User> users;

    public UserList() {
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
