package de.mt.wme.inf_box_lib.objects;

import org.simpleframework.xml.Default;
import org.simpleframework.xml.DefaultType;

/**
 * Represents a single inf_box-User
 * 
 * @author antaug
 * 
 */
@Default(DefaultType.PROPERTY)
public class User {

	private int id;

	private String username;

	private String display_name;

	private String birthday;

	private String email_address;

	private long quota;

	private long quota_used;

	public User() {

	}

	public User(String username, String display_name, String birthday,
			String email_adress) {
		this.username = username;
		this.display_name = display_name;
		this.birthday = birthday;
		this.email_address = email_adress;
		this.quota = 524288000L; // quota in bytes
		this.quota_used = 0L;

	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username
	 *            the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the display_name
	 */
	public String getDisplay_name() {
		return display_name;
	}

	/**
	 * @param display_name
	 *            the display_name to set
	 */
	public void setDisplay_name(String display_name) {
		this.display_name = display_name;
	}

	/**
	 * @return the birthday
	 */
	public String getBirthday() {
		return birthday;
	}

	/**
	 * @param birthday
	 *            the birthday to set
	 */
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	/**
	 * @return the email_address
	 */
	public String getEmail_address() {
		return email_address;
	}

	/**
	 * @param email_address
	 *            the email_address to set
	 */
	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}

	/**
	 * @return the quota
	 */
	public long getQuota() {
		return quota;
	}

	/**
	 * @param quota
	 *            the quota to set
	 */
	public void setQuota(long quota) {
		this.quota = quota;
	}

	/**
	 * @return the quota_used
	 */
	public long getQuota_used() {
		return quota_used;
	}

	/**
	 * @param quota_used
	 *            the quota_used to set
	 */
	public void setQuota_used(long quota_used) {
		this.quota_used = quota_used;
	}

}
